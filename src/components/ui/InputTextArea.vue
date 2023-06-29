<template>
  <div>
    <Field
      :class="className"
      :name="name"
      :type="type"
      :rules="rules"
      :placeholder="placeholder"
    /><br />
    <ErrorMessage :name="name" />
  </div>
</template>
<script setup>
import { Field, ErrorMessage } from 'vee-validate'
defineProps({
  className: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  rules: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
})
</script>
