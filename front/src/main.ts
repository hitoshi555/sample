import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)
app.use(router) // Vue Routerを使用する
app.mount('#app')
