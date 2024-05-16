<script setup lang="ts">
import WordRow from './WordRow.vue'
import type { Char } from '@/types/char'

defineProps<{
  activeRow: number
  isTypingAt: number
  maxTries: number
  stateMatrix: Char[][]
}>()
</script>

<template>
  <div
    class="grid grid-cols-5 place-content-center place-items-center gap-2"
    :class="`grid-rows-${maxTries}`"
  >
    <WordRow
      v-for="i in maxTries"
      :key="i"
      :is-active="activeRow === i - 1"
      :chars="stateMatrix[i - 1]"
    ></WordRow>
  </div>
</template>
