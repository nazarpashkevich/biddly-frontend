<script lang="ts">
import { defineComponent } from 'vue'
import { Form } from "vee-validate";
import FormInput from "~/components/form/FormInput.vue";
import * as yup from 'yup';
import PrimaryButton from "~/components/ui/PrimaryButton.vue";

export default defineComponent({
  name: "ForgotPasswordForm",
  components: { PrimaryButton, FormInput, Form },
  data: () => ({
    schema: yup.object({
      login: yup.string().required(),
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
    <FormInput name="login" placeholder="Your Email"/>
    <PrimaryButton class="w-full">Send Reset Link</PrimaryButton>
  </Form>
</template>
