<script setup lang="ts">
import { State } from '@/types/char'
import { computed } from 'vue'

const props = defineProps<{
  isActive: boolean
  state: State
}>()

const stateStyle = computed(() => {
  switch (props.state) {
    case State.RIGHT:
      return 'bg-green-500'
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
    class="flex h-14 w-full items-center justify-center rounded-lg border-2 p-2 text-center text-3xl text-slate-200"
    :class="
      isActive
        ? 'border-slate-200 bg-gray-500 opacity-100 shadow-xl'
        : ` border-transparent opacity-75 shadow-md ${stateStyle}`
    "
  >
    <span>
      <slot></slot>
    </span>
  </div>
</template>
