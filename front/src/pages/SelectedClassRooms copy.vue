<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { TutorialDataService } from '../services/ApiClientRepository'
import { ClassRoomDTO } from '../../codegen/api-client'
import PageTitle from '../components/PageTitle.vue'
import { useUserStore } from '../store/user'
import { notify } from '@kyvg/vue3-notification'
import router from '../router'
import SelectedClassRoomCard from '../components/SelectedClassRoomCard.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const result = ref<ClassRoomDTO[]>()
const api = new TutorialDataService()
const userStore = useUserStore()

const id = ref(route.params.id)

console.log('selected class rooms script start')

onMounted(async () => {
  try {
    const studentId =  userStore.studentId
    const isLoggedIn = userStore.isLoggedIn
    if (!isLoggedIn) {
        router.push('/')
      throw new Error('ログインしてください')
    }
    const classRoomId = Number(id.value)
    console.log('studentId:',studentId)
    const response = await api.editSelectedClassRoom(classRoomId,studentId)
    console.log('response', response)
    console.log('result', result.value)
    notify({
      title: 'edit select classroom',
      text: 'You have been selected!',
    })
    console.log('sample selected end')
    router.push('/selected-class-rooms')
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
      <PageTitle :title="'受講一覧'" />

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
