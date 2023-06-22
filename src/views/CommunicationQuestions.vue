<template>
  <div class="w-screen h-screen flex justify-center items-center overflow-x-hidden">
    <div class="w-11/12 h-5/6">
      <PageHeader :pageNumber="lastPage" />
      <div class="flex">
        <div class="w-1/2 relative h-screen overflow-x-hidden">
          <h1>
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენი
            თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების განმავლობაში მიზნებისთვის ერთად
            ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის. პანდემიის პერიოდში ერთმანეთსაც
            იშვიათად ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </h1>
          <Form @submit="onSubmit">
            <div class="mt-4">
              <h1>
                რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა
                სურვილისამებრ ჩაერთვება?*
              </h1>
              <div class="flex mt-2">
                <InputRadio
                  className="mr-2"
                  name="non_formal_meetings"
                  type="radio"
                  value="twice_a_week"
                  rules="required"
                />
                კვირაში ორჯერ
              </div>
              <div class="flex">
                <InputRadio
                  className="mr-2"
                  name="non_formal_meetings"
                  type="radio"
                  value="once_a_week"
                  rules="required"
                />
                კვირაში ერთხელ
              </div>
              <div class="flex">
                <InputRadio
                  className="mr-2"
                  name="non_formal_meetings"
                  type="radio"
                  value="once_in_two_week"
                  rules="required"
                />
                ორ კვირაში ერთხელ
              </div>
              <div class="flex">
                <InputRadio
                  className="mr-2"
                  name="non_formal_meetings"
                  type="radio"
                  value="once_in_month"
                  rules="required"
                />
                თვეში ერთხელ
              </div>
              <ErrorMessage name="non_formal_meetings" />
            </div>
            <div class="mt-4">
              <h1>კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</h1>
              <div class="flex">
                <InputRadio
                  className="mr-2"
                  name="number_of_days_from_office"
                  type="radio"
                  value="1"
                  rules="required"
                />
                1
              </div>
              <div class="flex">
                <InputRadio
                  className="mr-2"
                  name="number_of_days_from_office"
                  type="radio"
                  value="2"
                  rules="required"
                />
                2
              </div>
              <div class="flex">
                <InputRadio
                  className="mr-2"
                  name="number_of_days_from_office"
                  type="radio"
                  value="3"
                  rules="required"
                />
                3
              </div>
              <div class="flex">
                <InputRadio
                  className="mr-2"
                  name="number_of_days_from_office"
                  type="radio"
                  value="4"
                  rules="required"
                />
                4
              </div>
              <div class="flex">
                <InputRadio
                  className="mr-2"
                  name="number_of_days_from_office"
                  type="radio"
                  value="5"
                  rules="required"
                />
                5
              </div>
              <ErrorMessage name="number_of_days_from_office" />
            </div>
            <div class="mt-4">
              <h1>რას ფიქრობ ფიზიკურ შეკრებებზე?</h1>
              <TextArea
                className="w-full h-56 border border-black outline-none"
                name="what_about_meetings_in_live"
                type="text"
              />
            </div>
            <div class="mt-4">
              <h1>რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</h1>
              <TextArea
                className="w-full h-56 border border-black outline-none"
                name="tell_us_your_opinion_about_us"
                type="text"
              />
            </div>
            <button class="w-44 h-14 bg-finishColor rounded-full mt-2 absolute right-0 text-white">
              დასრულება
            </button>
          </Form>
        </div>
        <div class="w-1/2 relative">right</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import PageHeader from '@/components/shared/TheHeader.vue'
import InputRadio from '@/components/ui/InputRadio.vue'
import TextArea from '@/components/ui/TextArea.vue'
import { ErrorMessage, Form } from 'vee-validate'
import '@/assets/css/CommunicationQuestions.css'
import { ref } from 'vue'
let lastPage = ref('4')

function onSubmit(value) {
  console.log(value)
}
</script>
