<script setup lang="ts">
import { ref } from 'vue'
import MenuIcon from '@/icons/MenuIcon.vue'
import CloseIcon from '@/icons/CloseIcon.vue'
import HelpIcon from '@/icons/HelpIcon.vue'
import NavList from '@/components/NavList.vue'
import GithubIcon from '@/icons/GithubIcon.vue'
import NavItem from '@/components/NavItem.vue'
import CoffeIcon from '@/icons/CoffeeIcon.vue'
import MailIcon from '@/icons/MailIcon.vue'
import HelpModal from '@/components/modals/HelpModal.vue'

const showNav = ref(false)
const showHelpModal = ref(false)
</script>

<template>
  <HelpModal :show="showHelpModal"></HelpModal>

  <header
    class="w-full bg-gray-800 py-5 text-xl shadow-lg sm:px-12 md:px-40 md:text-2xl lg:px-60 xl:px-96"
  >
    <div class="container relative mx-auto">
      <div class="flex items-center px-6">
        <button type="button" class="ring-slate-200 focus:outline-none focus-visible:ring-2">
          <HelpIcon label="Regole" @click="showHelpModal = !showHelpModal" />
        </button>

        <h1 class="flex-1 text-center text-2xl font-extrabold md:text-3xl lg:text-4xl">
          Paro - La
        </h1>

        <button
          type="button"
          @click="showNav = !showNav"
          class="ring-slate-200 focus:outline-none focus-visible:ring-2"
        >
          <Transition name="menu" mode="out-in">
            <MenuIcon v-if="!showNav" label="Apri Menu" />
            <CloseIcon v-else label="Chiudi Menu" />
          </Transition>
        </button>
      </div>

      <Transition name="nav">
        <NavList v-show="showNav">
          <NavItem href="https://www.buymeacoffee.com/nicoloakacat">
            <CoffeIcon />Offrimi un caffe!
          </NavItem>
          <NavItem href="https://github.com/NicoloAkaCat/paro-la">
            <GithubIcon />Source Code
          </NavItem>
          <NavItem href="https://linktr.ee/nicoloakacat"> <MailIcon />Contatti </NavItem>
        </NavList>
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
