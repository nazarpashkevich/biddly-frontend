<template>
  <BaseLayout>
    <div class="flex gap-12 container mx-auto divide-x divide-slate-300">
      <div class="w-1/4">
        <MainMenu/>
      </div>
      <div class="w-3/4">
        <MainBanner/>
      </div>
    </div>
  </BaseLayout>
</template>
<script lang="ts" setup>
import BaseLayout from "~/layout/BaseLayout.vue";
import MainMenu from "~/components/home/MainMenu.vue";
import MainBanner from "~/components/home/MainBanner.vue";
</script>
