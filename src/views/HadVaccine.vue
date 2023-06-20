<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="w-11/12 h-5/6">
      <PageHeader :pageNumber="thirdpage" />
      <div class="flex">
        <div class="w-1/2 relative">
          <Form @submit="onSubmit">
            <h1>უკვე აცრილი ხარ?</h1>
            <div class="flex">
              <InputRadio
                name="had_vaccine"
                rules="required"
                value="yes"
                type="radio"
                @input="updateVaccine"
              />
              კი
            </div>
            <div class="flex">
              <InputRadio
                name="had_vaccine"
                rules="required"
                value="no"
                type="radio"
                @input="updateVaccine"
              />
              არა
            </div>
            <ErrorMessage name="had_vaccine" />
            <div v-if="vaccinationStage">
              <h1>აირჩიე რა ეტაპზე ხარ*</h1>
              <div class="flex">
                <InputRadio
                  name="vaccination_stage"
                  rules="required"
                  value="first_dosage_and_registered_on_the_second"
                  type="radio"
                />
                პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
              </div>
              <div class="flex">
                <InputRadio
                  name="vaccination_stage"
                  rules="required"
                  value="I_am_fully_vaccinated"
                  type="radio"
                />
                სრულად აცრილი ვარ
              </div>
              <div class="flex">
                <InputRadio
                  name="vaccination_stage"
                  rules="required"
                  value="First_dose_and_not_signed_up_for_another"
                  type="radio"
                />
                პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
              </div>
            </div>
            <Button />
          </Form>
        </div>
        <div class="w-1/2">left</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import PageHeader from '@/components/shared/TheHeader.vue'
import InputRadio from '@/components/ui/InputRadio.vue'
import Button from '@/components/ui/ButtonSubmit.vue'
import { Form, ErrorMessage } from 'vee-validate'
let thirdpage = ref('3')
let vaccinationStage = ref(false)

function onSubmit(value) {
  console.log(value)
  localStorage.setItem('had_vaccine', value.had_vaccine)
  localStorage.setItem('vaccination_stage', value.vaccination_stage)
}

function updateVaccine(value) {
  console.log('input ' + value.target.value)
  if (value.target.value === 'yes') {
    vaccinationStage.value = true
  } else {
    vaccinationStage.value = false
  }
}
</script>
