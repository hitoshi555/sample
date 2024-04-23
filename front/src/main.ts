import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import Notifications from '@kyvg/vue3-notification'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)
app.use(router) // Vue Routerを使用する
app.use(Notifications)
app.use(pinia)
app.mount('#app')
