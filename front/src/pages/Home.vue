<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { TutorialDataService } from '../services/ApiClientRepository'
import { ClassRoom } from '../../codegen/api-client'
import PageTitle from '../components/PageTitle.vue'
import ClassRoomCard from '../components/ClassRoomCard.vue'

const result = ref<ClassRoom[]>()
const api = new TutorialDataService()

console.log('Home script start')

onMounted(async () => {
  try {
    const response = await api.getAll()
    console.log('response', response)
    console.log('response', response.classRooms)
    result.value = response.classRooms
    console.log('result', result.value)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})

console.log('Home script end')
</script>

<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <PageTitle :title="'授業一覧'" />

      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <div
          v-for="course in result"
          :key="course.id"
        >
          <ClassRoomCard
            :id="course.id"
            :name="course.name"
            :description="course.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>
