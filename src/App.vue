<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import TheHeader from './TheHeader.vue'
import WordBoard from './components/WordBoard.vue'
import MatchModal from './components/MatchModal.vue'
import VirtualKeyboard from './components/VirtualKeyboard.vue'
import { State, type Char } from './types/char'
import { getAlphabet, getStateMatrix } from './types/utils'

const showModal = ref(false)
const modalMsg = ref('')

const word = ref('')
const wordMap = new Map<string, Map<number, State>>()

const isTypingAt = ref(0)
const activeRow = ref(0)
const maxTries = 6

const alphabet: Ref<Char[]> = ref(getAlphabet())
const stateMatrix = ref<Char[][]>(getStateMatrix())

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

const getWordMap = () => {
  wordMap.clear()
  for (let pos = 0; pos < word.value.length; pos++) {
    const charPositions = wordMap.get(word.value[pos])
    if (charPositions === undefined)
      wordMap.set(word.value[pos], new Map<number, State>([[pos, State.GUESS]]))
    else charPositions.set(pos, State.GUESS)
  }
}

const checkGuess = (guess: Char[]) => {
  getWordMap()
  let wrongPlaceIndexes: number[] = []
  let guessedWord = ''
  const alphabetCharsArray = alphabet.value.map((c: Char) => c.char)

  for (let pos = 0; pos < guess.length; pos++) {
    let guessedIndexes = wordMap.get(guess[pos].char)
    if (guessedIndexes === undefined) {
      guess[pos].state = State.WRONG
      alphabet.value[alphabetCharsArray.indexOf(guess[pos].char)].state = State.WRONG
    } else if (guessedIndexes.get(pos) === undefined) {
      guess[pos].state = State.WRONGPLACE
      wrongPlaceIndexes.push(pos)
      const alphabetChar = alphabet.value[alphabetCharsArray.indexOf(guess[pos].char)]
      if (alphabetChar.state !== State.RIGHT) alphabetChar.state = State.WRONGPLACE
    } else {
      guess[pos].state = State.RIGHT
      guessedIndexes.set(pos, State.RIGHT)
      guessedWord += guess[pos].char
      alphabet.value[alphabetCharsArray.indexOf(guess[pos].char)].state = State.RIGHT
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

  if (guessedWord === word.value) {
    gameOver(true)
  }
}

const updateMatrix = (c: string) => {
  if (activeRow.value >= maxTries) return
  if (c === 'Backspace' || c === 'Delete') {
    if (isTypingAt.value !== 0) {
      stateMatrix.value[activeRow.value][isTypingAt.value - 1].char = ''
      isTypingAt.value--
    }
  } else if (alphabet.value.map((c: Char) => c.char).includes(c) && isTypingAt.value < 5) {
    stateMatrix.value[activeRow.value][isTypingAt.value].char = c
    isTypingAt.value++
  } else if (c === 'Enter') {
    if (isTypingAt.value === 5 && activeRow.value < maxTries) {
      checkGuess(stateMatrix.value[activeRow.value])
      activeRow.value++
      isTypingAt.value = 0
    }
  }
}

// input from keyboard
window.addEventListener('keydown', (e) => {
  updateMatrix(e.key)
})

// input from virtual keyboard
const virtualUpdateMatrix = (c: string) => {
  updateMatrix(c)
}

const gameOver = (wordGuessed: boolean) => {
  showModal.value = true
  activeRow.value = maxTries + 1
  wordGuessed ? (modalMsg.value = 'Complimenti!') : (modalMsg.value = 'Game Over')
}

const retry = () => {
  showModal.value = false
  getWord()
  activeRow.value = 0
  isTypingAt.value = 0
  stateMatrix.value = getStateMatrix()
  alphabet.value = getAlphabet()
}

watch(activeRow, (currentRow) => {
  if (currentRow === maxTries) gameOver(false)
})

getWord()
</script>

<template>
  <TheHeader />

  <Teleport to="body">
    <MatchModal :show="showModal" @retry="retry">
      <template #header>{{ modalMsg }}</template>
      La parola era <em>{{ word }}</em>
    </MatchModal>
  </Teleport>

  <main class="mx-auto w-full p-6 sm:w-4/6 md:w-3/6 xl:w-2/6">
    <WordBoard
      :state-matrix="stateMatrix"
      :max-tries="maxTries"
      :active-row="activeRow"
      :is-typing-at="isTypingAt"
    />
    <VirtualKeyboard :alphabet="alphabet" class="mt-10" @key-down="virtualUpdateMatrix" />
  </main>
</template>

<style scoped></style>
