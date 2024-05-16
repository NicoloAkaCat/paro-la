<script setup lang="ts">
import { State } from '@/types/char'
import { computed } from 'vue'

const props = defineProps<{
  state?: State
}>()

const stateStyle = computed(() => {
  switch (props.state) {
    case State.RIGHT:
      return 'bg-green-500'
    case State.WRONGPLACE:
      return 'bg-yellow-500'
    case State.WRONG:
      return 'bg-gray-800'
    case State.GUESS:
    default:
      return 'bg-gray-700'
  }
})
</script>

<template>
  <button
    type="button"
    :class="stateStyle"
    class="flex flex-1 items-center justify-center rounded-md p-1 text-xl uppercase ring-slate-200 hover:ring-2 focus:outline-none focus-visible:ring-2 md:text-2xl"
  >
    <slot></slot>
  </button>
</template>
