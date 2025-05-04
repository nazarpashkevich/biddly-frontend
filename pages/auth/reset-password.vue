<template>
  <AuthLayout>
    <h2 class="text-3xl font-semibold">Reset your password</h2>
    <ResetPasswordForm class="mt-10"/>
  </AuthLayout>
</template>
<script lang="ts" setup>
import AuthLayout from "~/layout/AuthLayout.vue";
import ResetPasswordForm from "~/components/auth/ResetPasswordForm.vue";
</script>
