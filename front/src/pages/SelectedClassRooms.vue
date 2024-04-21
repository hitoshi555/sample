<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { TutorialDataService } from '../services/ApiClientRepository'
import { ClassRoomDTO } from '../../codegen/api-client'
import PageTitle from '../components/PageTitle.vue'
import ClassRoomCard from '../components/ClassRoomCard.vue'
import { useUserStore } from '../store/user'
import { notify } from '@kyvg/vue3-notification'
import router from '../router'

const result = ref<ClassRoomDTO[]>()
const api = new TutorialDataService()
const userStore = useUserStore()

console.log('selected class rooms script start')

onMounted(async () => {
  try {
    const studentId =  userStore.studentId
    const isLoggedIn = userStore.isLoggedIn
    if (!isLoggedIn) {
        router.push('/')
      throw new Error('ログインしてください')
    }
    console.log('studentId:',studentId)
    const response = await api.selectedClassRooms(studentId)
    console.log('response', response)
    console.log('result', result.value)
    result.value = response
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

console.log('selected class rooms script end')
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
