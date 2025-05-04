<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "HeaderMenuItem",
  props: {
    title: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <NuxtLink :to="href" class="hover:text-slate-500 text-slate-700 font-semibold">{{ title }}</NuxtLink>
</template>
