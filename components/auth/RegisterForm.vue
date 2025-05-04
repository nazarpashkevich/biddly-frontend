<script lang="ts">
import { defineComponent } from 'vue'
import { Form } from "vee-validate";
import FormInput from "~/components/form/FormInput.vue";
import * as yup from 'yup';
import PrimaryButton from "~/components/ui/PrimaryButton.vue";
import SecondaryButton from "~/components/ui/SecondaryButton.vue";
import IconFacebook from "~/components/icons/social/IconFacebook.vue";
import IconGoogle from "~/components/icons/social/IconGoogle.vue";

export default defineComponent({
  name: "RegisterForm",
  components: { IconGoogle, IconFacebook, SecondaryButton, PrimaryButton, FormInput, Form },
  data: () => ({
    schema: yup.object({
      name: yup.string().required(),
      login: yup.string().required(),
      password: yup.string().required().min(6),
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
    <FormInput name="name" placeholder="Name"/>
    <FormInput name="login" placeholder="Email or Phone Number"/>
    <FormInput name="password" placeholder="Password"/>
    <div class="flex flex-col gap-4 mt-4">
      <PrimaryButton class="w-full">Create Account</PrimaryButton>
      <SecondaryButton :icon="''" class="w-full">
        <template #default>
          Sign up with Google
        </template>
        <template #icon>
          <IconGoogle/>
        </template>
      </SecondaryButton>
    </div>
  </Form>
</template>
