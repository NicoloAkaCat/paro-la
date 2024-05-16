<script setup lang="ts">
import CharBox from './CharBox.vue'
import type { Char } from '@/types/char'

defineProps<{
  isActive: boolean
  chars: Char[]
}>()
</script>

<template>
  <CharBox v-for="i in 5" :key="i" :is-active="isActive" :state="chars[i - 1].state">
    {{ chars[i - 1].char }}
  </CharBox>
</template>
