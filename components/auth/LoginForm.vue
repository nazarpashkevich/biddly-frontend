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
  name: "LoginForm",
  components: { IconGoogle, IconFacebook, SecondaryButton, PrimaryButton, FormInput, Form },
  data: () => ({
    schema: yup.object({
      login: yup.string().required(),
      password: yup.string().required(),
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
    <FormInput name="login" placeholder="Email or Phone Number"/>
    <div class="flex flex-col">
      <FormInput name="password" placeholder="Password"/>
      <NuxtLink class="text-slate-600 underline text-sm ml-auto mt-2" to="/auth/forgot-password">
        Forgot password?
      </NuxtLink>
    </div>
    <div class="flex flex-col gap-4">
      <PrimaryButton class="w-full">Login</PrimaryButton>
      <SecondaryButton :icon="''" class="w-full">
        <template #default>
          Sign in with Google
        </template>
        <template #icon>
          <IconGoogle/>
        </template>
      </SecondaryButton>
    </div>
  </Form>
</template>
