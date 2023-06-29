import { createRouter, createWebHistory } from 'vue-router'
import StartQuestionnaire from '@/views/StartQuestionnaireView.vue'
import UserIdentification from '@/views/UserIdentificationView.vue'
import HadCovid from '@/views/HadCovidView.vue'
import HadVaccine from '@/views/HadVaccineView.vue'
import CommunicationQuestions from '@/views/CommunicationQuestionsView.vue'

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
    {
      path: '/had-vaccine',
      name: 'HadVaccine',
      component: HadVaccine,
    },
    {
      path: '/communication-questions',
      name: 'CommunicationQuestions',
      component: CommunicationQuestions,
    },
  ],
})

export default router
