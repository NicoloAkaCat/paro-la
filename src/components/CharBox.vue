<script setup lang="ts">
import { State } from '@/types/charState'
import { computed } from 'vue'

const props = defineProps<{
  isActive: boolean
  state: State
}>()

const stateStyle = computed(() => {
  switch (props.state) {
    case State.RIGHT:
      return 'bg-green-500'
    case State.WRONG:
      return 'bg-red-500'
    case State.WRONGPLACE:
      return 'bg-yellow-500'
    case State.GUESS:
    default:
      return 'bg-gray-700'
  }
})
</script>

<template>
  <div
    class="rounded-lg p-2 text-center text-3xl text-slate-200 md:p-4 md:text-4xl"
    :class="
      isActive
        ? ' border-2 border-slate-200 bg-gray-500 opacity-100 shadow-xl'
        : ` opacity-75 shadow-md ${stateStyle}`
    "
  >
    <slot></slot>
  </div>
</template>
