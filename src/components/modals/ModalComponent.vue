<script setup lang="ts">
defineProps<{
  show: boolean
}>()
defineEmits<{
  closed: []
}>()
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="show"
        class="absolute left-0 top-0 z-50 flex min-h-screen w-svw items-center justify-center bg-black bg-opacity-45"
        @click="$emit('closed')"
      >
        <div
          class="m-10 w-full rounded-xl bg-gray-800 p-10 text-center shadow-lg md:w-6/12 md:p-12 lg:w-2/6"
        >
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 150ms ease-in;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  scale: 1.2;
}
</style>
