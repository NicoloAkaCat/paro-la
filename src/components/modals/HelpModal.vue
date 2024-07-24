<script setup lang="ts">
import Modal from '@/components/modals/ModalComponent.vue'
import WordRow from '../WordRow.vue'
import { State, type Char } from '@/types/char'

const show = defineModel('show', { required: true, type: Boolean })

const example1: Array<Char> = [
  { char: 'F', state: State.RIGHT },
  { char: 'A', state: State.GUESS },
  { char: 'T', state: State.GUESS },
  { char: 'T', state: State.GUESS },
  { char: 'O', state: State.GUESS }
]

const example2: Array<Char> = [
  { char: 'T', state: State.GUESS },
  { char: 'O', state: State.WRONGPLACE },
  { char: 'R', state: State.GUESS },
  { char: 'T', state: State.GUESS },
  { char: 'A', state: State.GUESS }
]

const example3: Array<Char> = [
  { char: 'L', state: State.GUESS },
  { char: 'E', state: State.GUESS },
  { char: 'N', state: State.GUESS },
  { char: 'T', state: State.WRONG },
  { char: 'O', state: State.GUESS }
]

const exampleWords = [example1, example2, example3]
const exampleMessages = [
  { letter: 'F', msg: 'è nella parola, nella giusta posizione' },
  { letter: 'O', msg: 'è nella parola, ma nella posizione sbagliata' },
  { letter: 'T', msg: 'non è nella parola, in nessuna posizione' }
]
</script>

<template>
  <Modal :show="show" with-close-icon @closed="show = false">
    <h1 class="mb-4 text-3xl font-bold">Come si gioca?</h1>
    <p class="mb-2 text-base lg:text-lg">Indovina la parola in 6 tentativi.</p>
    <p class="text-base lg:text-lg">
      Il colore delle caselle cambia a seconda di quanto sei vicino alla soluzione.
    </p>

    <h2 class="mt-6 text-left text-xl font-bold lg:text-2xl">Esempio</h2>
    <template v-for="(word, i) in exampleWords" :key="i">
      <div class="mb-2 mt-4 flex gap-2">
        <WordRow :is-active="false" :chars="word" />
      </div>
      <p class="text-left text-base lg:text-lg">
        <span class="font-bold">{{ exampleMessages[i].letter }}</span> {{ exampleMessages[i].msg }}
      </p>
    </template>
  </Modal>
</template>
