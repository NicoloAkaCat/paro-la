<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>

<template>
  <div>
    <i aria-hidden="true" class="block">
      <slot></slot>
    </i>
    <span v-if="label !== undefined" class="sr-only">{{ label }}</span>
  </div>
</template>
