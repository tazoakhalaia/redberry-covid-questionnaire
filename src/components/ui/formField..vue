<template>
  <div>
    <Field
      :class="fieldClass"
      :name="fieldName"
      :type="fieldType"
      :rules="fieldRules"
      :placeholder="fieldPlaceholder"
    /><br />
    <ErrorMessage :name="fieldName" />
  </div>
</template>
<script setup>
import { Field, ErrorMessage } from 'vee-validate'
defineProps({
  fieldClass: {
    type: String,
    required: true,
  },
  fieldName: {
    type: String,
    required: true,
  },
  fieldType: {
    type: String,
    required: true,
  },
  fieldRules: {
    type: String,
    required: true,
  },
  fieldPlaceholder: {
    type: String,
    required: true,
  },
})
</script>
<style lang=""></style>
