<template>
  <div>
    <Field
      :class="className"
      :name="name"
      :type="type"
      :value="value"
      :rules="rules"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script setup>
import { Field } from 'vee-validate'
defineProps({
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
  value: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
  },
})
</script>
