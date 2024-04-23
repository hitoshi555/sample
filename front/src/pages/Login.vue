<!-- <script setup lang="ts">
import { ref } from 'vue'
import { useApi } from '@/composables/useApi'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

interface ModelType {
  email: string | null
  password: string | null
}

const api = useApi()
const router = useRouter()

const formRef = ref<FormInst | null>(null)
const formLoading = ref(false)
const userStore = useUserStore()
const formValue = ref<ModelType>({
  email: null,
  password: null,
})
const rules: FormRules = {
  email: {
    required: true,
    type: 'email',
    message: 'login.email.required',
    trigger: ['input'],
  },
  password: {
    required: true,
    message: 'login.password.required',
    trigger: ['input'],
  },
}
const login = async (e: MouseEvent) => {
  e.preventDefault()
  formLoading.value = true
  formRef.value?.validate((errors: Array<FormValidationError> | undefined) => {
    if (!errors) {
      api
        .post('auth/login', formValue.value)
        .then((response) => {
          userStore.setLoggedIn(response.data)
          // notification success
          router.push('/')
        })
        .catch((error) => {
             // notification error
        })
        .then(() => (formLoading.value = false))
    } else {
      formLoading.value = false
    }
  })
}
</script> -->

<script setup lang="ts">
import { ref } from 'vue'
import { useNotification } from '@kyvg/vue3-notification'
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'
import { TutorialDataService } from '../services/ApiClientRepository'

const api = new TutorialDataService()
const userStore = useUserStore()
const router = useRouter()

const { notify } = useNotification()

interface LoginForm {
  studentId: string
  password: string
}

const loginForm = ref<LoginForm>({ studentId: '', password: '' })

function handleSubmit() {
  console.log('Login Data:', loginForm.value)
  loginApi(loginForm.value)
}

async function loginApi(loginData: LoginForm) {
  try {
    // Dummy API call simulation
    console.log('loginData', loginData)
    const response = await api.login(loginData.studentId, loginData.password)
    console.log('Login response', response)
    userStore.setLoggedIn(response)
    console.log('Login successful')
    console.log('response.password:', response.access_token)
    console.log('response.studentId:', response.studentId)
    notify({
      title: 'Authorization',
      text: 'You have been logged in!',
    })
    router.push('/')
  } catch (error) {
    console.error('Login failed:', error)
    alert('Login failed')
  }
}
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1
          class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
        >
          大学授業管理
        </h1>
        <!-- <form
            class="space-y-4 md:space-y-6"
            action="#"
          >
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Your email</label>
              <input
                id="email"
                type="email"
                name="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required="true"
              >
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="true"
              >
            </div>

            <button
              type="submit"
              class="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
          </form> -->
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label
              for="studentId"
              class="block text-gray-700 text-sm font-bold mb-2"
            >Student ID:</label>
            <input
              id="studentId"
              v-model="loginForm.studentId"
              type="text"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block text-gray-700 text-sm font-bold mb-2"
            >Password:</label>
            <input
              id="password"
              v-model="loginForm.password"
              type="password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
