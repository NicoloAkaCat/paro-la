<script setup lang="ts">
import VirtualKey from './VirtualKey.vue'
import { validKeys } from '@/types/keys'

defineEmits<{
  keyDown: [charKey: string]
}>()
</script>

<template>
  <div>
    <div class="mb-1 flex justify-evenly gap-1">
      <VirtualKey v-for="c in validKeys.slice(0, 10)" :key="c" @click="$emit('keyDown', c)">{{
        c
      }}</VirtualKey>
    </div>

    <div class="mb-1 flex justify-evenly gap-1">
      <VirtualKey v-for="c in validKeys.slice(10, 19)" :key="c" @click="$emit('keyDown', c)">{{
        c
      }}</VirtualKey>
    </div>

    <div class="flex justify-evenly gap-1">
      <VirtualKey @click="$emit('keyDown', 'Enter')"
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
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
      </VirtualKey>
      <VirtualKey v-for="c in validKeys.slice(19, 26)" :key="c" @click="$emit('keyDown', c)">{{
        c
      }}</VirtualKey>
      <VirtualKey @click="$emit('keyDown', 'Backspace')"
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
            d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
          />
        </svg>
      </VirtualKey>
    </div>
  </div>
</template>
