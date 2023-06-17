<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="w-screen h-screen flex justify-center items-center overflow-x-hidden">
      <div class="w-11/12 h-5/6">
        <PageHeader :pageNumber="firstPage" />
        <div class="flex">
          <div class="w-1/2 h-screen relative">
            <Form class="mt-20" @submit="onSubmit">
              <div>
                <Input
                  className="w-inputWidth h-12 border border-gray mt-10"
                  name="name"
                  type="text"
                  rules="required|min:2"
                  placeholder="სახელი"
                  v-model="userName"
                />
              </div>
              <div>
                <Input
                  className="w-inputWidth h-12 border border-gray mt-20"
                  name="lastname"
                  type="text"
                  rules="required|min:2"
                  placeholder="გვარი"
                  v-model="lastName"
                />
              </div>
              <div>
                <Input
                  className="w-inputWidth h-12 border border-gray mt-20"
                  name="email"
                  type="text"
                  rules="required|email|redberry_email"
                  placeholder="მეილი"
                  v-model="userEmail"
                />
              </div>
              <Button />
            </Form>
            <div class="h-lineHeight w-56 mt-20 bg-black"></div>
            <div class="mt-10">
              <h1 class="text-gray-600 w-72">*-ით მონიშნული ველების შევსება სავალდებულოა</h1>
            </div>
          </div>
          <div class="relative">
            <idetifyImg class="mt-imagePos" />
            <transition name="idetifyLogo">
              <IdentifyPageLogo
                v-if="identifyPage"
                class="absolute top-44 w-idetifyLogo left-28 opacity-50"
              />
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import PageHeader from '@/components/shared/TheHeader.vue'
import { Form } from 'vee-validate'
import idetifyImg from '@/assets/image/identifyImg.vue'
import IdentifyPageLogo from '@/components/icons/IconLogoPage.vue'
import '@/assets/css/userIdentificationPage.css'
import Input from '@/components/ui/InputField.vue'
import Button from '../components/ui/ButtonField.vue'
let firstPage = ref(1)
let identifyPage = ref(false)
let userName = ref('')
let lastName = ref('')
let userEmail = ref('')
onMounted(() => {
  identifyPage.value = true
})
function onSubmit(values) {
  console.log(values)
  localStorage.setItem('name', userName.value)
  localStorage.setItem('lastname', lastName.value)
  localStorage.setItem('email', userEmail.value)
}
</script>
