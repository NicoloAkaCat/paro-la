<script setup lang="ts">
import { type Char } from '@/types/char'
import VirtualKey from './VirtualKey.vue'
import EnterIcon from '@/icons/EnterIcon.vue'
import BackspaceIcon from '@/icons/BackspaceIcon.vue'

const props = defineProps<{
  alphabet: Char[]
}>()

defineEmits<{
  keyDown: [charKey: string]
}>()
</script>

<template>
  <div>
    <div class="mb-1 flex justify-evenly gap-1">
      <VirtualKey
        v-for="c in props.alphabet.slice(0, 10)"
        :key="c.char"
        :state="c.state"
        @click="$emit('keyDown', c.char)"
        >{{ c.char }}</VirtualKey
      >
    </div>

    <div class="mb-1 flex justify-evenly gap-1">
      <VirtualKey
        v-for="c in props.alphabet.slice(10, 19)"
        :key="c.char"
        :state="c.state"
        @click="$emit('keyDown', c.char)"
        >{{ c.char }}</VirtualKey
      >
    </div>

    <div class="flex justify-evenly gap-1">
      <VirtualKey @click="$emit('keyDown', 'Enter')"><EnterIcon label="Invio" /></VirtualKey>
      <VirtualKey
        v-for="c in props.alphabet.slice(19, 26)"
        :key="c.char"
        :state="c.state"
        @click="$emit('keyDown', c.char)"
        >{{ c.char }}</VirtualKey
      >
      <VirtualKey @click="$emit('keyDown', 'Backspace')"
        ><BackspaceIcon label="Cancella"
      /></VirtualKey>
    </div>
  </div>
</template>
