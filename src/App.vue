<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from './TheHeader.vue'
import WordBoard from './components/WordBoard.vue'

const word = ref('')

const getWord = () => {
  fetch('https://random-word-api.herokuapp.com/word?length=5&lang=it&number=1', {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((w) => (word.value = w[0]))
}
getWord()
</script>

<template>
  <TheHeader />

  <main class="mx-auto w-full p-6 sm:w-4/6 md:w-3/6 lg:w-2/6">
    <WordBoard :word="word" />
  </main>
</template>

<style scoped></style>
