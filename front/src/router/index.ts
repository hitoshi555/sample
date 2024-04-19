import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import A from '../pages/A.vue'
import ClassRoomDetail from '../pages/ClassRoomDetail.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/a', name: 'a', component: A },
  { path: '/class-room/:id', component: ClassRoomDetail },
]

const router = createRouter({
  history: createWebHistory(), // HTML5 History モード
  routes,
})

export default router
