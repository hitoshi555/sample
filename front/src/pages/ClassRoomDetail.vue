<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ClassRoomWithTeachers, Teacher } from '../../codegen/api-client'
import { TutorialDataService } from '../services/ApiClientRepository'
import { notify } from '@kyvg/vue3-notification'
import router from '../router'
import { useUserStore } from '../store/user'

const userStore = useUserStore()
const route = useRoute()
const result = ref<ClassRoomWithTeachers>()
const api = new TutorialDataService()
const id = ref(route.params.id)
const teachers = ref<Teacher[] | null>()

onMounted(async () => {
  try {
    const classRoomId = Number(id.value)

    const response = await api.getClassRoomDetail(classRoomId)

    result.value = response.classRoom
    teachers.value = response.classRoom.teacher
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})

const buttonClick = async () => {
  try {
    const isLoggedIn = userStore.isLoggedIn
    if (!isLoggedIn) {
      throw new Error('ログインしてください')
    }

    const id = result.value ? result.value.id : 0
    const studentId = userStore.studentId
    const period = result.value ? result.value.period : {}
    const timeSlot = result.value ? result.value.timeSlot : {}
    const weekday = result.value ? result.value.weekday : {}

    const response = await api.selectClassRoom(
      id,
      studentId,
      period,
      timeSlot,
      weekday,
    )
    if (response.resultText !== 'added') {
      throw new Error('時間が重複している授業があります')
    }
    notify({
      title: 'select classroom',
      text: 'You have been selected!',
    })
    router.push('/')
  } catch (error) {
    console.error('Login out:', error)
    notify({
      type: 'error',
      title: 'Failed',
      text: `${error}`,
    })
  }
}
</script>

<template>
  <div
    class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
  >
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <h1>class room</h1>
    </div>

    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:items-start lg:gap-y-10"
    >
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8"
      >
        <div class="lg:pr-4">
          <div class="lg">
            <h2
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              {{ result?.name }}
            </h2>
            <p class="mt-6 text-xl leading-8 text-gray-700">
              {{ result?.description }}
            </p>
            <p class="mt-6 text-xl leading-8 text-gray-700">
              単位数: {{ result?.units }}
            </p>
            <p class="mt-6 text-xl leading-8 text-gray-700">
              開講時期: {{ result?.period }}-{{ result?.timeSlot }}-{{
                result?.weekday
              }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-12 sm:py-14">
      <div class="mb-6">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Meet our leadership
        </h2>
      </div>

      <ul
        role="list"
        class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
      >
        <li
          v-for="teacher in teachers"
          :key="teacher.id"
        >
          <div class="flex items-center gap-x-6">
            <div>
              <h3
                class="text-base font-semibold leading-7 tracking-tight text-gray-900"
              >
                {{ teacher.name }}
              </h3>
              <p class="text-sm font-semibold leading-6 text-indigo-600">
                {{ teacher.position }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="flex items-center justify-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        @click="buttonClick"
      >
        受講する
      </button>
    </div>
  </div>
</template>
