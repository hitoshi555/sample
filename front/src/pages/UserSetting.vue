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

interface PasswordForm {
  password: string
  confirmationPassword: string
}

const passwordForm = ref<PasswordForm>({
  password: '',
  confirmationPassword: '',
})

function handleSubmit() {
  changePassword(passwordForm.value)
}

async function changePassword(passwordForm: PasswordForm) {
  try {
    // Dummy API call simulation
    //パスワードと確認用パスワードが一致しているか判定
    const studentId = userStore.studentId
    if (passwordForm.password !== passwordForm.confirmationPassword) {
      throw new Error('パスワードと確認用パスワードが一致しません')
    }
    //userIdとパスワードを送る
    await api.changePassword(studentId, passwordForm.password)

    notify({
      title: 'change password',
      text: 'You have been changed password!',
    })
  } catch (error) {
    console.error('Failed change password:', error)
    notify({
      type: 'error',
      title: 'Failed change password',
      text: `${error}`,
    })
  }
}

const buttonClick = () => {
  try {
    userStore.logoutUser()
    notify({
      title: 'Authorization',
      text: 'You have been logged out!',
    })
    router.push('/')
  } catch (error) {
    console.error('Login out:', error)
    notify({
      title: 'Logout failed',
      text: 'Logout failed',
    })
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

        <form @submit.prevent="handleSubmit">
          <div class="mb-6">
            <label
              for="password"
              class="block text-gray-700 text-sm font-bold mb-2"
            >パスワード:</label>
            <input
              id="password"
              v-model="passwordForm.password"
              type="password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
          </div>
          <div class="mb-6">
            <label
              for="confirmationPassword"
              class="block text-gray-700 text-sm font-bold mb-2"
            >確認用パスワード:</label>
            <input
              id="confirmationPassword"
              v-model="passwordForm.confirmationPassword"
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
              パスワードを変更
            </button>
          </div>
        </form>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click="buttonClick"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
