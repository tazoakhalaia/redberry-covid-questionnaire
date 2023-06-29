<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="w-11/12 h-5/6">
      <PageHeader :pageNumber="thirdpage" />
      <div class="flex mt-20">
        <div class="w-1/2 relative">
          <Form @submit="onSubmit">
            <h1>უკვე აცრილი ხარ?</h1>
            <div class="flex">
              <InputRadio
                name="had_vaccine"
                rules="required"
                value="1"
                type="radio"
                @input="updateVaccine"
              />
              კი
            </div>
            <div class="flex">
              <InputRadio
                name="had_vaccine"
                rules="required"
                value="0"
                type="radio"
                @input="updateVaccine"
              />
              არა
            </div>
            <ErrorMessage name="had_vaccine" />
            <div v-if="vaccinationStage" class="mt-2">
              <h1>აირჩიე რა ეტაპზე ხარ*</h1>
              <div class="flex mt-4">
                <InputRadio
                  name="vaccination_stage"
                  rules="required"
                  value="first_dosage_and_registered_on_the_second"
                  type="radio"
                  @input="vaccinationRegistration"
                />
                პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
              </div>
              <div class="flex">
                <InputRadio
                  name="vaccination_stage"
                  rules="required"
                  value="fully_vaccinated"
                  type="radio"
                  @input="vaccinationRegistration"
                />
                სრულად აცრილი ვარ
              </div>
              <div class="flex">
                <InputRadio
                  name="vaccination_stage"
                  rules="required"
                  value="first_dosage_and_not_registered_ye"
                  type="radio"
                  @input="vaccinationRegistration"
                />
                პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
              </div>
            </div>
            <div v-if="onlyFirstDose" class="w-72 mt-4">
              <h1>
                რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი
                <span class="text-blue-500 decoration-solid">https://booking.moh.gov.ge/</span>
              </h1>
            </div>
            <div v-if="noVaccinate" class="mt-4">
              <h1>რას ელოდები?*</h1>
              <div class="flex">
                <InputRadio
                  name="waiting"
                  rules="required"
                  value="registered_and_waiting"
                  type="radio"
                  @input="notVaccinateUser"
                />
                დარეგისტრირებული ვარ და ველოდები რიცხვს
              </div>
              <div class="flex">
                <InputRadio
                  name="waiting"
                  rules="required"
                  value="not_planning"
                  type="radio"
                  @input="notVaccinateUser"
                />
                არ ვგეგმავ
              </div>
              <div class="flex">
                <InputRadio
                  name="waiting"
                  rules="required"
                  value="had_covid_and_planning_to_be_vaccinated"
                  type="radio"
                  @input="notVaccinateUser"
                />
                გადატანილი მაქვს და ვგეგმავ აცრას
              </div>
            </div>
            <div v-if="notInPlan">
              <a href="https://booking.moh.gov.ge/" class="text-blue-500"
                >👉 https://booking.moh.gov.ge/</a
              >
            </div>
            <Button />
          </Form>
        </div>
        <div class="w-1/2 mb-20 relative">
          <DoctorImage class="relative z-10" />
          <transition name="star">
            <IconStar class="absolute -top-10 z-0 left-16 w-56 h-80" v-if="starAnimation" />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import PageHeader from '@/components/shared/TheHeader.vue'
import InputRadio from '@/components/ui/InputRadio.vue'
import Button from '@/components/ui/ButtonSubmit.vue'
import { Form, ErrorMessage } from 'vee-validate'
import DoctorImage from '@/assets/image/DoctorImage.vue'
import IconStar from '@/components/icons/IconStar.vue'
import '@/assets/css/HadVaccine.css'
import { useRouter } from 'vue-router'
let starAnimation = ref(false)
let thirdpage = ref('3')
let vaccinationStage = ref(false)
let onlyFirstDose = ref(false)
let noVaccinate = ref(false)
let notInPlan = ref(false)
let router = useRouter()

onMounted(() => {
  starAnimation.value = true
})

function onSubmit(value) {
  console.log(value)
  localStorage.setItem('had_vaccine', value.had_vaccine)
  localStorage.setItem('vaccination_stage', value.vaccination_stage)
  localStorage.setItem('waiting', value.waiting)
  router.push({ path: '/communication-questions' })
}

function updateVaccine(value) {
  console.log('input ' + value.target.value)
  if (value.target.value === '1') {
    vaccinationStage.value = true
    notInPlan.value = false
  } else if (value.target.value === '0') {
    onlyFirstDose.value = false
    vaccinationStage.value = false
  } else {
    vaccinationStage.value = false
  }

  if (value.target.value === '0') {
    noVaccinate.value = true
  } else {
    noVaccinate.value = false
  }
}

function vaccinationRegistration(value) {
  console.log(value.target.value)
  if (value.target.value === 'First_dose_and_not_signed_up_for_another') {
    onlyFirstDose.value = true
  } else {
    onlyFirstDose.value = false
  }
}

function notVaccinateUser(value) {
  if (value.target.value === 'i_dont_want_to_vaccinate') {
    notInPlan.value = true
  } else {
    notInPlan.value = false
  }
}
</script>
