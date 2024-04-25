<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { TutorialDataService } from '../services/ApiClientRepository'
import { ClassRoom } from '../../codegen/api-client'
import PageTitle from '../components/PageTitle.vue'
import { useUserStore } from '../store/user'
import { notify } from '@kyvg/vue3-notification'
import router from '../router'
import SelectedClassRoomCard from '../components/SelectedClassRoomCard.vue'

const result = ref<ClassRoom[]>()
const api = new TutorialDataService()
const userStore = useUserStore()

onMounted(async () => {
  try {
    const studentId = userStore.studentId
    const isLoggedIn = userStore.isLoggedIn
    if (!isLoggedIn) {
      router.push('/')
      throw new Error('ログインしてください')
    }
    const response = await api.selectedClassRooms(studentId)
    result.value = response.classrooms
  } catch (error) {
    console.error('Error fetching data:', error)
    console.error('Login out:', error)
    notify({
      type: 'error',
      title: 'Failed',
      text: `${error}`,
    })
  }
})
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
          <SelectedClassRoomCard
            :id="course.id"
            :name="course.name"
            :description="course.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>
