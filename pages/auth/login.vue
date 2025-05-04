<template>
  <AuthLayout>
    <h2 class="text-3xl font-semibold">Log In To <b>Biddly</b></h2>
    <LoginForm class="mt-10"/>
    <p class="mt-4 text-sm text-slate-600 text-center">
      Dont have account yet?
      <NuxtLink class="underline" to="/auth/registration">Create an account</NuxtLink>
    </p>
  </AuthLayout>
</template>
<script lang="ts" setup>
import AuthLayout from "~/layout/AuthLayout.vue";
import LoginForm from "~/components/auth/LoginForm.vue";
</script>
