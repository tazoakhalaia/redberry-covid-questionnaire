<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="w-11/12 h-5/6">
      <PageHeader :pageNumber="firstPage" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import PageHeader from '@/components/shared/PageHeader.vue'
let firstPage = ref(1)
</script>
