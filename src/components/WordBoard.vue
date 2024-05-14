<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import WordRow from './WordRow.vue'
import type { Char } from '@/types/charState'
import { State } from '@/types/charState'

const props = defineProps<{
  word: string
}>()

const emit = defineEmits<{
  gameOver: [wordGuessed: boolean]
}>()

const wordMap = new Map<string, Map<number, State>>()

const getWordMap = () => {
  wordMap.clear()
  for (let pos = 0; pos < props.word.length; pos++) {
    const charPositions = wordMap.get(props.word[pos])
    if (charPositions === undefined)
      wordMap.set(props.word[pos], new Map<number, State>([[pos, State.GUESS]]))
    else charPositions.set(pos, State.GUESS)
  }
}

const validKeys = 'abcdefghijklmnopqrstuvwxyz'.split('')
validKeys.push('Backspace', 'Delete')

const stateMatrix = reactive<Char[][]>([
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

const checkGuess = (guess: Char[]) => {
  getWordMap()
  let wrongPlaceIndexes: number[] = []
  let guessedWord = ''

  for (let pos = 0; pos < guess.length; pos++) {
    let guessedIndexes = wordMap.get(guess[pos].char)
    if (guessedIndexes === undefined) guess[pos].state = State.WRONG
    else if (guessedIndexes.get(pos) === undefined) {
      guess[pos].state = State.WRONGPLACE
      wrongPlaceIndexes.push(pos)
    } else {
      guess[pos].state = State.RIGHT
      guessedIndexes.set(pos, State.RIGHT)
      guessedWord += guess[pos].char
    }
  }
  // check if a char is already guessed in all position
  // and if so removes the WRONGPLACE state from same char
  // in wrong places
  wrongPlaceIndexes.forEach((i) => {
    const rigthStates = wordMap.get(guess[i].char)
    let allGuessed = true
    rigthStates!.forEach((s) => {
      if (s !== State.RIGHT) allGuessed = false
    })
    if (allGuessed) guess[i].state = State.WRONG
  })

  if (guessedWord === props.word) {
    emit('gameOver', true)
  }
}

const keyboardInputController = () => {
  window.addEventListener('keydown', (e) => {
    if (activeRow.value === 5) return
    if (e.key === 'Backspace' || e.key === 'Delete') {
      if (isTypingAt.value !== 0) {
        stateMatrix[activeRow.value][isTypingAt.value - 1].char = ''
        isTypingAt.value--
      }
    } else if (validKeys.includes(e.key) && isTypingAt.value < 5) {
      stateMatrix[activeRow.value][isTypingAt.value].char = e.key
      isTypingAt.value++
    } else if (e.key === 'Enter') {
      if (isTypingAt.value === 5 && activeRow.value < 5) {
        checkGuess(stateMatrix[activeRow.value])
        activeRow.value++
        isTypingAt.value = 0
      }
    }
  })
}
keyboardInputController()

watch(activeRow, (currentRow) => {
  if (currentRow === 5) emit('gameOver', false)
})
</script>

<template>
  <div class="grid grid-cols-5 grid-rows-5 place-content-center place-items-center gap-2">
    <WordRow
      v-for="i in 5"
      :key="i"
      :is-active="activeRow === i - 1"
      :chars="stateMatrix[i - 1]"
    ></WordRow>
  </div>
</template>
