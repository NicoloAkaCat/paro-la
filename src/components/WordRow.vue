<script setup lang="ts">
import CharBox from './CharBox.vue'
import type { Char } from '@/types/charState'

defineProps<{
  isActive: boolean
  word: string
  chars: Char[]
}>()
</script>

<template>
  <CharBox v-for="i in 5" :key="i" :is-active="isActive" :state="chars[i - 1].state">
    {{ chars[i - 1].char }}
  </CharBox>
</template>
