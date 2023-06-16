import { createRouter, createWebHistory } from 'vue-router'
import StartQuestionnaire from '../views/StartQuestionnaire.vue'
import UserIdentification from '../views/UserIdentification.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StartQuestionnaire,
    },
    {
      path: '/identification',
      name: 'UserIdentification',
      component: UserIdentification,
    },
  ],
})

export default router
