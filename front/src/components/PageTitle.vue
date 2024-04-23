<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})

const title = ref(props.title)
</script>

<template>
  <div class="mx-auto max-w-2xl lg:mx-0">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      {{ title }}
    </h2>
  </div>
</template>
