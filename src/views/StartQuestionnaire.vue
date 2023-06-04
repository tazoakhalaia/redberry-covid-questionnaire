<template>
  <div class="overflow-hidden w-screen h-screen relative">
    <center>
      <div class="absolute top-1/3 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <transition name="image">
          <img v-if="mainImageshow" class="w-28 h-28" src="../assets/image/start.png" />
        </transition>
      </div>
    </center>
    <div
      class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-40 break-all mt-24 text-center"
    >
      <transition name="start">
        <router-link to="/" v-if="startText" class="font-bold text-3xl"
          >კითხვარის დაწყება</router-link
        >
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
let mainImageshow = ref(false)
let startText = ref(false)
onMounted(() => {
  if (!mainImageshow.value) {
    mainImageshow.value = true
    setTimeout(() => {
      startText.value = true
    }, 2000)
  } else {
    mainImageshow.value = false
  }
})
</script>

<style scoped>
.image-enter-from {
  width: 100%;
  height: 100%;
  transform: scale(5);
}

.image-enter-to {
  width: 112px;
  height: 112px;
}

.image-enter-active {
  transition: all 0.5s ease-in-out;
}

.start-enter-from {
  opacity: 0;
}

.start-enter-to {
  opacity: 1;
}
.start-enter-active {
  transition: all 2s ease-in-out;
}
</style>
