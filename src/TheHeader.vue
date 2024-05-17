<script setup lang="ts">
import { ref } from 'vue'
import MenuIcon from '@/icons/MenuIcon.vue'
import CloseIcon from '@/icons/CloseIcon.vue'
import HelpIcon from '@/icons/HelpIcon.vue'

const showNav = ref(false)
</script>

<template>
  <header class="relative w-full bg-gray-800 py-5 shadow-lg">
    <div class="container mx-auto">
      <div class="flex items-center px-6">
        <button type="button">
          <HelpIcon label="Regole" />
        </button>

        <h1 class="flex-1 text-center text-2xl font-extrabold md:text-3xl lg:text-4xl">
          Paro - La
        </h1>

        <button type="button" @click="showNav = !showNav">
          <Transition name="menu" mode="out-in">
            <MenuIcon v-if="!showNav" label="Apri Menu" />
            <CloseIcon v-else label="Chiudi Menu" />
          </Transition>
        </button>
      </div>

      <ul v-show="showNav" class="absolute left-0 z-50 w-full bg-gray-800 py-12 text-center">
        <li>
          <a href="#">regole</a>
        </li>
        <li>
          <a href="#">github</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.menu-enter-active {
  animation: spin 250ms;
}
.menu-leave-active {
  animation: spin 250ms reverse;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
</style>
