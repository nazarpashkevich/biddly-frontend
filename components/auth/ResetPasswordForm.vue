<script lang="ts">
import { defineComponent } from 'vue'
import { Form } from "vee-validate";
import FormInput from "~/components/form/FormInput.vue";
import * as yup from 'yup';
import PrimaryButton from "~/components/ui/PrimaryButton.vue";

export default defineComponent({
  name: "ResetPasswordForm",
  components: { PrimaryButton, FormInput, Form },
  data: () => ({
    schema: yup.object({
      password: yup.string().required().min(6),
      confirm_password: yup.string().label('confirm password').required().oneOf([yup.ref('password')], 'Passwords must match'),
    }),
  }),
  methods: {
    onSubmit(values: unknown) {
      console.log('It hasn`t been implemented yet!');
    }
  }
})
</script>

<template>
  <Form :validation-schema="schema" class="flex flex-col gap-8" @submit="onSubmit">
    <FormInput name="password" placeholder="Password"/>
    <FormInput name="confirm_password" placeholder="Confirm a password"/>

    <PrimaryButton class="w-full">Reset Password</PrimaryButton>
  </Form>
</template>
