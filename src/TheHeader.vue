<script setup lang="ts">
import { ref } from 'vue'
import MenuIcon from '@/icons/MenuIcon.vue'
import CloseIcon from '@/icons/CloseIcon.vue'
import HelpIcon from '@/icons/HelpIcon.vue'
import NavList from '@/components/NavList.vue'

const showNav = ref(false)
</script>

<template>
  <header
    class="w-full bg-gray-800 py-5 text-xl shadow-lg sm:px-12 md:px-40 md:text-2xl lg:px-60 xl:px-96"
  >
    <div class="container relative mx-auto">
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

      <Transition name="nav">
        <NavList v-show="showNav" />
      </Transition>
    </div>
  </header>
</template>

<style scoped>
.nav-enter-active,
.nav-leave-active {
  transition: all 250ms ease-out;
}

.nav-enter-from,
.nav-leave-to {
  opacity: 0;
}

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
