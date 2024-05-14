<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from './TheHeader.vue'
import WordBoard from './components/WordBoard.vue'
import MatchModal from './components/MatchModal.vue'

const word = ref('')
const showModal = ref(false)
const modalMsg = ref('')

const getWord = () => {
  fetch('https://random-word-api.herokuapp.com/word?length=5&lang=it&number=1', {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((w: Array<string>) => {
      word.value = w[0]
      console.log(word.value) //TODO remove
    })
    .catch((e) => {
      console.log(e) //TODO improve error handling
    })
}
getWord()

const gameOver = () => {
  showModal.value = true
  modalMsg.value = 'Game Over'
}

const wordGuessed = () => {
  showModal.value = true
  modalMsg.value = 'Complimenti!'
}

const retry = () => {
  showModal.value = false
  getWord()
}
</script>

<template>
  <TheHeader />

  <Teleport to="body">
    <MatchModal :show="showModal" @retry="retry">
      <template #header>{{ modalMsg }}</template>
      La parola era <em>{{ word }}</em>
    </MatchModal>
  </Teleport>

  <main class="mx-auto w-full p-6 sm:w-4/6 md:w-3/6 lg:w-2/6">
    <WordBoard :word="word" :key="word" @game-over="gameOver" @word-guessed="wordGuessed" />
  </main>
</template>

<style scoped></style>
