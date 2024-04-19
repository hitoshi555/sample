import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import A from '../pages/A.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/a', name: 'a', component: A },
]

const router = createRouter({
  history: createWebHistory(), // HTML5 History モード
  routes,
})

export default router
