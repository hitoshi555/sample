import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { usePreferredDark, useStorage } from '@vueuse/core'
import { ResponseLogin } from '../../codegen/api-client'

export const useUserStore = defineStore('userStore', () => {
  const token = useStorage('token', 'string')
  const studentId = useStorage('studentId', 'string')
  const isLoggedIn = computed(() => {
    return (
      token.value !== undefined &&
      token.value !== '' &&
      token.value != null &&
      studentId.value !== undefined &&
      studentId.value !== '' &&
      studentId.value != null
    )
  })
  const isLoading = ref(false)
  const isDark = usePreferredDark()
  const sidebarCollapsed = useStorage('sidebarCollapsed', false)

  const toggleSidebarCollapsed = async () => {
    sidebarCollapsed.value = !sidebarCollapsed.value
  }

  const setLoggedIn = async (data: ResponseLogin) => {
    token.value = data.access_token
    studentId.value = data.studentId
  }

  const setIsLoading = async (value: boolean) => {
    isLoading.value = value
  }
  const logoutUser = async () => {
    token.value = undefined
    studentId.value = undefined
  }

  return {
    toggleSidebarCollapsed,
    sidebarCollapsed,
    isDark,
    setIsLoading,
    isLoading,
    logoutUser,
    setLoggedIn,
    isLoggedIn,
    token,
    studentId,
  } as const
})
