import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import A from '../pages/A.vue'
import ClassRoomDetail from '../pages/ClassRoomDetail.vue'
import Login from '../pages/Login.vue'
import UserSetting from '../pages/UserSetting.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/a', name: 'a', component: A },
  { path: '/class-room/:id', component: ClassRoomDetail },
  { path: '/login', component: Login },
  { path: '/user-setting', component: UserSetting },
]

const router = createRouter({
  history: createWebHistory(), // HTML5 History モード
  routes,
})

export default router
