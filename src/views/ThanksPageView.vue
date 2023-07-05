<template>
  <div class="w-screen h-screen bg-lastPageBg flex justify-center items-center">
    <div class="w-96 h-56 relative flex justify-center items-center">
      <transition name="thanks">
        <IconThanks v-if="thanksAnimation" />
      </transition>
      <transition name="rightstar">
        <IconBigStar v-if="startStarAnimation" class="absolute bottom-8 right-0" />
      </transition>
      <transition name="leftstar">
        <IconStar v-if="startStarAnimation" class="absolute top-0 left-0" />
      </transition>
    </div>
  </div>
</template>
<script setup>
import IconThanks from '@/components/icons/IconThanks.vue'
import IconBigStar from '@/components/icons/IconBigStar.vue'
import IconStar from '@/components/icons/IconStars.vue'
import '@/assets/css/ThanksPage.css'
import { ref, onMounted } from 'vue'
let thanksAnimation = ref(false)
let startStarAnimation = ref(false)

onMounted(() => {
  setTimeout(() => {
    thanksAnimation.value = true
  }, 1000)

  setTimeout(() => {
    startStarAnimation.value = true
  }, 2000)
})
</script>
