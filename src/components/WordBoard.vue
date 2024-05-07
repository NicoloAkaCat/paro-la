<script setup lang="ts">
import { reactive, ref } from 'vue'
import WordRow from './WordRow.vue'
import type { Char } from '@/types/charState'
import { State } from '@/types/charState'

const props = defineProps<{
  word: string
}>()

const validKeys = 'abcdefghijklmnopqrstuvwxyz'.split('')
validKeys.push('Backspace', 'Delete')

const stateMatrix = reactive<Char[][]>([
  [
    { char: '‎', state: State.RIGHT }, //sets height for boxes
    { char: '', state: State.GUESS },
    { char: '', state: State.WRONG },
    { char: '', state: State.WRONGPLACE },
    { char: '', state: State.GUESS }
  ],
  [
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS }
  ],
  [
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS }
  ],
  [
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS }
  ],
  [
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS }
  ]
])
const isTypingAt = ref(0)
const activeRow = ref(0)

const keyboardInputController = () => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      stateMatrix[activeRow.value][isTypingAt.value - 1].char = ''
      if (isTypingAt.value !== 0) isTypingAt.value--
    } else if (validKeys.includes(e.key) && isTypingAt.value < props.word.length) {
      stateMatrix[activeRow.value][isTypingAt.value].char = e.key
      isTypingAt.value++
    } else if (e.key === 'Enter') {
      if (isTypingAt.value === props.word.length && activeRow.value < 4) {
        activeRow.value++
        isTypingAt.value = 0
      }
    }
  })
}
keyboardInputController()
</script>

<template>
  <div class="grid grid-cols-5 grid-rows-5 gap-4">
    <WordRow
      v-for="i in 5"
      :key="i"
      :is-active="activeRow === i - 1"
      :word="word"
      :chars="stateMatrix[i - 1]"
    ></WordRow>
  </div>
</template>
