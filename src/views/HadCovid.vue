<template>
  <div class="w-screen h-screen flex justify-center items-center overflow-x-hidden">
    <div class="w-11/12 h-5/6">
      <PageHeader :pageNumber="secondPage" />
      <div class="flex">
        <div class="w-1/2 relative">
          <Form @submit="onSobmit">
            <h1>გაქვს გადატანილი კოვიდ 19?</h1>
            <div class="flex">
              <InputRadio
                className="mr-2"
                name="had_covid"
                type="radio"
                value="yes"
                rules="required"
                v-model="covidResult"
                @input="updateShow"
              />
              კი
            </div>
            <div class="flex">
              <InputRadio
                className="mr-2"
                name="had_covid"
                type="radio"
                value="no"
                rules="required"
                v-model="covidResult"
                @input="updateShow"
              />
              არა
            </div>
            <div class="flex">
              <InputRadio
                className="mr-2"
                name="had_covid"
                type="radio"
                value="now have"
                rules="required"
                v-model="covidResult"
                @input="updateShow"
              />
              ახლა მაქვს
            </div>
            <ErrorMessage name="had_covid" />
            <div v-if="show" class="mt-4">
              <h1>ანტისხეულების ტესტი გაქვს გაკეთებული?*</h1>
              <div class="flex">
                <InputRadio
                  className="mr-2"
                  name="had_antibody_test"
                  value="yes"
                  type="radio"
                  @input="updateAnditode"
                  v-model="antibodiesValue"
                />
                კი
              </div>
              <div class="flex">
                <InputRadio
                  className="mr-2"
                  name="had_antibody_test"
                  value="no"
                  type="radio"
                  v-model="antibodiesValue"
                  @input="updateAnditode"
                />
                არა
              </div>
            </div>
            <div v-if="antibodiesShow" class="mt-4">
              <h1>
                თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*
              </h1>
              <Input
                className="w-inputWidth h-12 border border-gray mt-4"
                name="test_date"
                type="text"
                placeholder="რიცხვი"
              /><br />
              <Input
                className="w-inputWidth h-12 border border-gray"
                name="number"
                type="text"
                placeholder="ანტისხეულების რაოდენობა"
              />
            </div>
            <div v-if="date" class="mt-2">
              <h1>მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</h1>
              <div class="w-full border border-gray-500 p-2">
                <Input
                  name="date"
                  type="date"
                  className="border border-black border-none outline-none w-full mt-2"
                />
              </div>
            </div>
            <Button />
          </Form>
        </div>
        <div class="w-1/2 relative">
          <transition name="redball">
            <IconRedBall class="absolute top-56 left-20 opacity-80 w-56" />
          </transition>
          <VaccinateImage />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import PageHeader from '@/components/shared/TheHeader.vue'
import { Form, ErrorMessage } from 'vee-validate'
import InputRadio from '@/components/ui/InputRadio.vue'
import Input from '@/components/ui/InputField.vue'
import Button from '@/components/ui/ButtonSubmit.vue'
import VaccinateImage from '@/assets/image/VaccinateImage.vue'
import IconRedBall from '@/components/icons/IconRedBall.vue'
import '@/assets/css/CovidQuestions.css'
import { useRouter } from 'vue-router'
let router = useRouter()
let secondPage = ref('2')
let covidResult = ref('')
let show = ref(false)
let antibodiesShow = ref(false)
let antibodiesValue = ref('')
let date = ref(false)

function onSobmit(value) {
  console.log(value)
  localStorage.setItem('had_covid', value.had_covid)
  localStorage.setItem('had_antibody_test', value.had_antibody_test)
  localStorage.setItem('test_date', value.test_date)
  localStorage.setItem('number', value.number)
  localStorage.setItem('date', value.date)
  router.push({ path: '/had-vaccine' })
}
function updateShow(value) {
  if (value.target.value === 'yes') {
    show.value = true
  } else if (value.target.value != 'yes') {
    antibodiesValue.value = ' '
    show.value = false
    antibodiesShow.value = false
    date.value = false
  } else {
    show.value = false
  }
}
function updateAnditode(value) {
  if (value.target.value === 'yes') {
    antibodiesShow.value = true
    date.value = false
  } else {
    antibodiesShow.value = false
    date.value = true
  }
}
</script>
