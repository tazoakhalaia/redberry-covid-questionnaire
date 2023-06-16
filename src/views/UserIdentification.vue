<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="w-screen h-screen flex justify-center items-center overflow-x-hidden">
      <div class="w-11/12 h-5/6">
        <PageHeader :pageNumber="firstPage" />
        <div class="flex">
          <div class="w-1/2 h-screen relative">
            <Form class="mt-20" @submit="onSubmit">
              <div>
                <Field
                  class="w-inputWidth h-12 border border-gray"
                  name="name"
                  type="text"
                  rules="required|min:2"
                  placeholder="სახელი"
                /><br />
                <ErrorMessage name="name" />
              </div>
              <div>
                <Field
                  class="w-inputWidth mt-20 h-12 border border-gray"
                  name="lastname"
                  type="text"
                  rules="required|min:2"
                  placeholder="გვარი"
                /><br />
                <ErrorMessage name="lastname" />
              </div>
              <div>
                <Field
                  class="w-inputWidth mt-20 h-12 border border-gray"
                  name="email"
                  type="email"
                  rules="required|email|redberry_email"
                  placeholder="fbi@redberry.ge"
                /><br />
                <ErrorMessage name="email" />
              </div>
              <button class="absolute right-0 bottom-24 mr-negative text-3xl">></button>
            </Form>
            <div class="h-lineHeight w-56 mt-20 bg-black"></div>
            <div class="mt-10">
              <h1 class="text-gray-600 w-72">*-ით მონიშნული ველების შევსება სავალდებულოა</h1>
            </div>
          </div>
          <div>
            <idetifyImg class="mt-imagePos" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import PageHeader from '@/components/shared/PageHeader.vue'
import { Field, Form, ErrorMessage } from 'vee-validate'
import idetifyImg from '@/assets/image/identifyImg.vue'
let firstPage = ref(1)
function onSubmit(values) {
  console.log(values)
}
</script>
<style lang=""></style>
