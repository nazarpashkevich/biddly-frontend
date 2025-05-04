<script lang="ts">
import { defineComponent } from 'vue'
import { ApplicationConfig } from "~/config/application.config";
import HeaderMenuItem from "~/components/layout/HeaderMenuItem.vue";

export default defineComponent({
  name: "HeaderMenu",
  components: { HeaderMenuItem },
  data: () => ({
    items: ApplicationConfig.layout.headerMenu.items
  })
})
</script>

<template>
  <nav class="flex gap-16">
    <template v-for="(headerItem, index) in items" :key="index">
      <HeaderMenuItem :href="headerItem.href" :title="headerItem.title"/>
    </template>
  </nav>
</template>

<style scoped>

</style>
