<script setup lang="ts">
import IconComponent from './IconComponent.vue'
defineProps<{
  label?: string
}>()
</script>

<template>
  <IconComponent :label="label">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-6 w-6 md:h-8 md:w-8"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  </IconComponent>
</template>
