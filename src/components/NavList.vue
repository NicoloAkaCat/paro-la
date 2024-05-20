<script setup lang="ts">
import GithubIcon from '@/icons/GithubIcon.vue'
import NavItem from './NavItem.vue'
import CoffeIcon from '@/icons/CoffeeIcon.vue'
</script>

<template>
  <ul
    class="absolute right-8 top-full z-50 mt-10 flex w-max flex-col items-center justify-center gap-4 rounded-lg border-2 border-slate-200 bg-gray-800 p-6 text-center shadow-lg"
  >
    <NavItem href="#"><CoffeIcon />Offrimi un caffe!</NavItem>
    <NavItem href="#"><GithubIcon />GitHub</NavItem>
  </ul>
</template>
