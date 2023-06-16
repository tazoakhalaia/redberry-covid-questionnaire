<template>
  <div>
    <div class="flex justify-between items-center">
      <div>
        <RedberryImage />
      </div>
      <div class="flex">
        <h1 class="font-bold text-xl">{{ pageNumber }} /</h1>
        <h1 class="font-bold text-xl ml-1">4</h1>
      </div>
    </div>
    <div class="bg-black h-lineHeight mt-6"></div>
  </div>
</template>
<script setup>
import RedberryImage from '@/assets/image/RedBerryImage.vue'
defineProps({
  pageNumber: {
    type: String,
    required: true,
  },
})
</script>
<style></style>
