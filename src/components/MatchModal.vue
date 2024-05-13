<script setup lang="ts">
defineProps<{
  show: boolean
}>()
defineEmits<{
  retry: []
}>()
</script>

<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="absolute left-0 top-0 flex h-svh w-svw items-center justify-center bg-black bg-opacity-45"
    >
      <div class="w-max rounded-xl bg-gray-800 p-10 text-center shadow-lg md:p-12">
        <h1 class="mb-5 text-2xl md:mb-7 md:text-5xl">
          <slot></slot>
        </h1>
        <button
          class="rounded-lg bg-yellow-600 p-4 text-lg uppercase shadow-lg ring-yellow-400 transition-transform duration-150 hover:scale-110 focus:outline-none focus:ring-2 md:text-xl"
          @click="$emit('retry')"
        >
          Riprova
        </button>
      </div>
    </div>
  </Transition>
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
