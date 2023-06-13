<template>
  <div class="overflow-hidden w-screen h-screen relative">
    <center>
      <div class="absolute top-1/3 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <transition name="image">
          <StartQuestionnaireImage class="w-28 h-28" v-if="mainImageshow" />
        </transition>
      </div>
    </center>
    <div
      class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-40 break-all mt-24 text-center"
    >
      <transition name="start">
        <router-link to="/identification" v-if="startText" class="font-bold text-3xl"
          >კითხვარის დაწყება</router-link
        >
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import StartQuestionnaireImage from '../assets/image/StartQuestionnaireImage.vue'
let mainImageshow = ref(false)
let startText = ref(false)
onMounted(() => {
  if (!mainImageshow.value) {
    mainImageshow.value = true
    setTimeout(() => {
      startText.value = true
    }, 1000)
  } else {
    mainImageshow.value = false
  }
})
</script>

<style scoped src="../assets/css/startQuestionnaire.css"></style>
