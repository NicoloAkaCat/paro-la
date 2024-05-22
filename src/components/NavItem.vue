<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>

<template>
  <li>
    <a :href="href" class="flex items-center justify-center gap-2">
      <slot></slot>
    </a>
  </li>
</template>
