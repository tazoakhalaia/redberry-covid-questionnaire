import { createRouter, createWebHistory } from 'vue-router'
import StartQuestionnaire from '@/views/StartQuestionnaire.vue'
import UserIdentification from '@/views/UserIdentification.vue'
import HadCovid from '@/views/HadCovid.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StartQuestionnaire,
    },
    {
      path: '/user-identifier',
      name: 'UserIdentification',
      component: UserIdentification,
    },
    {
      path: '/covid-questions',
      name: 'CovidQuestions',
      component: HadCovid,
    },
  ],
})

export default router
