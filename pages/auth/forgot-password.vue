<template>
  <AuthLayout>
    <h2 class="text-3xl font-semibold">Forgot your password?</h2>
    <ForgotPasswordForm class="mt-10"/>
  </AuthLayout>
</template>
<script lang="ts" setup>
import AuthLayout from "~/layout/AuthLayout.vue";
import ForgotPasswordForm from "~/components/auth/ForgotPasswordForm.vue";
</script>
