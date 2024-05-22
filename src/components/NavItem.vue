<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>

<template>
  <li>
    <a
      :href="href"
      target="_blank"
      class="flex items-center justify-center gap-2 ring-slate-200 hover:underline focus:outline-none focus-visible:ring-2"
    >
      <slot></slot>
    </a>
  </li>
</template>
