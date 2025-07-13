<script setup lang="ts">
import CloseIcon from '@/icons/CloseIcon.vue'

withDefaults(
  defineProps<{
    show: boolean
    withCloseIcon?: boolean
  }>(),
  {
    withCloseIcon: false
  }
)
defineEmits<{
  closed: []
}>()
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="show"
        class="absolute top-0 left-0 z-50 flex h-svh w-svw items-center justify-center bg-black/45"
        @click="$emit('closed')"
      >
        <div
          class="relative m-10 w-full rounded-xl bg-gray-800 p-10 text-center shadow-lg md:w-6/12 md:p-12 lg:w-2/6"
        >
          <button v-if="withCloseIcon" type="button" class="absolute top-4 right-4 cursor-pointer">
            <CloseIcon :label="'Chiudi'" />
          </button>
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
