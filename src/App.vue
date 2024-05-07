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

  <main class="container mx-auto p-4 lg:px-72">
    <WordBoard :word="word" />
  </main>
</template>

<style scoped></style>
