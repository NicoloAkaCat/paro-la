<script setup lang="ts">
import Modal from '@/components/modals/ModalComponent.vue'

defineProps<{
  show: boolean
}>()
</script>

<template>
  <Modal :show="show"></Modal>
</template>
