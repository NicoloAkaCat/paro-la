<script setup lang="ts">
import { ref } from 'vue'

const showNav = ref(false)
</script>

<template>
  <header class="relative w-full bg-gray-800 py-5 shadow-lg">
    <div class="flex items-center px-6">
      <button type="button">
        <i
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </i>
        <span class="sr-only">Regole</span>
      </button>

      <h1 class="flex-1 text-center text-2xl font-extrabold md:text-3xl lg:text-4xl">Paro - La</h1>

      <button type="button" @click="showNav = !showNav">
        <Transition name="menu" mode="out-in">
          <i v-if="!showNav" class="block"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </i>
          <i v-else class="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </i>
        </Transition>
        <span class="sr-only">Menu</span>
      </button>
    </div>

    <ul v-show="showNav" class="absolute z-50 w-full bg-gray-800 py-12 text-center">
      <li>
        <a href="#">regole</a>
      </li>
      <li>
        <a href="#">github</a>
      </li>
    </ul>
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
