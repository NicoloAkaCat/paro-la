<script setup lang="ts">
import Modal from '@/components/modals/ModalComponent.vue'

defineProps<{
  show: boolean
}>()
defineEmits<{
  retry: []
}>()
</script>

<template>
  <Modal :show="show">
    <h1 class="mb-2 text-3xl md:mb-5 md:text-5xl">
      <slot name="header"></slot>
    </h1>
    <h2 class="mb-4 text-lg md:mb-6 md:text-2xl">
      <slot name="word"></slot>
    </h2>
    <button
      class="rounded-lg bg-green-700 p-4 text-lg uppercase text-white shadow-lg ring-green-400 transition-all duration-150 hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-4 md:text-xl"
      @click="$emit('retry')"
    >
      Gioca Ancora
    </button>
  </Modal>
</template>
