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
        <h1 class="mb-2 text-3xl md:mb-5 md:text-5xl">
          <slot name="header"></slot>
        </h1>
        <h2 class="mb-4 text-lg md:mb-6 md:text-2xl">
          <slot></slot>
        </h2>
        <button
          class="rounded-lg bg-green-700 p-4 text-lg uppercase text-white shadow-lg ring-green-400 transition-all duration-150 hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-2 md:text-xl"
          @click="$emit('retry')"
        >
          Gioca Ancora
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
