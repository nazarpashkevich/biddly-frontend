<template>
  <AuthLayout>
    <h2 class="text-3xl font-semibold">Create an account</h2>
    <h2 class="mt-4">Enter your details below</h2>
    <RegisterForm class="mt-10"/>
    <p class="mt-4 text-sm text-slate-600 text-center">
      Already have account?
      <NuxtLink class="underline" to="/auth/login">Log In</NuxtLink>
    </p>
  </AuthLayout>
</template>
<script lang="ts" setup>
import RegisterForm from "~/components/auth/RegisterForm.vue";
import AuthLayout from "~/layout/AuthLayout.vue";
</script>
