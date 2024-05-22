<script setup lang="ts">
import Modal from '@/components/ModalComponent.vue'

defineProps<{
  show: boolean
}>()
</script>

<template>
  <Modal :show="show"></Modal>
</template>
