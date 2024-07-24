<script setup lang="ts">
import Modal from '@/components/modals/ModalComponent.vue'

const show = defineModel('show', { required: true, type: Boolean })
</script>

<template>
  <Modal :show="show" @closed="show = false"></Modal>
</template>
