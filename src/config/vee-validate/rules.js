import { defineRule } from 'vee-validate' // npm install vee-validate --save
import { required, email, min } from '@vee-validate/rules' // npm install @vee-validate/rules

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

defineRule('redberry_email', (value) => {
  if (!value) {
    return true
  }

  if (!value.endsWith('@redberry.ge')) {
    return 'Email address must end with "@redberry.ge"'
  }

  return true
})
