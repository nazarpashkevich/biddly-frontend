<script lang="ts">
import { defineComponent } from 'vue'
import IconArrow from "~/components/icons/IconArrow.vue";

export default defineComponent({
  name: "MainMenuItem",
  components: { IconArrow },
  props: {
    title: {
      type: String,
      required: false
    },
    link: {
      type: String,
      required: false
    }
  }
})
</script>

<template>
  <NuxtLink :to="link"
            class="text-lg font-semibold text-slate-700 cursor-pointer hover:text-slate-900 hover:bg-slate-50
            py-3 px-4 flex">
    <span>{{ title }}</span>
    <IconArrow class="ml-auto"/>
  </NuxtLink>
</template>
