<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ClassRoomWithTeachers, Teacher } from '../../codegen/api-client'
import { TutorialDataService } from '../services/ApiClientRepository'

const route = useRoute()

const result = ref<ClassRoomWithTeachers>()
const api = new TutorialDataService()
const id = ref(route.params.id)
const teachers = ref<Teacher[] | null>()

console.log('ClassRoom script start')

onMounted(async () => {
  try {
    console.log('id', id.value)
    const classRoomId = Number(id.value)
    console.log('classRoomId typeof', classRoomId)
    console.log('classRoomId', classRoomId)
    const response = await api.getClassRoomDetail(classRoomId)
    console.log('response', response.classRoom)
    result.value = response.classRoom
    teachers.value = response.classRoom.teacher
    console.log('result', result.value)
    console.log('teachers', teachers)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})

console.log('ClassRoom script end')
</script>

<template>
  <h1>class room</h1>
  <div>classroom num {{ id }}</div>
  {{ result }}
  <router-link to="/">
    class room
  </router-link>

  <div
    class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
  >
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg
        class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M100 200V.5M.5 .5H200"
              fill="none"
            />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
        />
      </svg>
    </div>

    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:items-start lg:gap-y-10"
    >
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8"
      >
        <div class="lg:pr-4">
          <div class="lg">
            <h1
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              A better workflow
            </h1>
            <p class="mt-6 text-xl leading-8 text-gray-700">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-12 sm:py-14">
      <div
        class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3"
      >
        <div class="">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
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
    </div>
  </div>
</template>
