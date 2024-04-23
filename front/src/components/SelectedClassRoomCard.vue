<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  id: {
    type: Number,
    default: undefined,
  },
  name: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
})

const id = ref(props.id)
const name = ref(props.name)
const description = ref(props.description)
</script>

<template>
  <article class="flex max-w-xl flex-col items-start justify-between">
    <div class="group relative">
      <h3
        class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
      >
        <router-link :to="`selected-class-room/${id}`">
          <span class="absolute inset-0" />
          {{ name }}
        </router-link>
      </h3>
      <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
        {{ description }}
      </p>
    </div>
  </article>
</template>
