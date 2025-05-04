<script lang="ts">
import { defineComponent } from 'vue'
import type { FooterNavigationItem } from "~/types/layout";

export default defineComponent({
  name: "FooterNavigationGroup",
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array as PropType<FooterNavigationItem[]>,
      required: true
    }
  }
})
</script>

<template>
  <div class="flex flex-col gap-6">
    <h3 class="text-2xl font-semibold">{{ title }}</h3>
    <div class="flex flex-col gap-4">
      <template v-for="item in items" :key="item.title">
        <p v-if="!item.href">
          {{ item.title }}
        </p>
        <NuxtLink v-else :to="item.href" class="hover:text-indigo-300">{{ item.title }}</NuxtLink>
      </template>
    </div>
  </div>
</template>
