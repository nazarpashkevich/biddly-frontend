<template>
  <BaseLayout>
    <div class="py-12 flex min-h-[45rem]">
      <div
        :style="{backgroundImage: 'url(https://www.bostonteapartyship.com/wp-content/uploads/2019/09/benjamin-franklin-portrait.jpg)'}"
        class="flex-1/2 bg-cover"></div>
      <div class="flex-1/2">
        <div class="flex flex-col mx-auto max-w-sm pt-12">
          <slot/>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
<script lang="ts" setup>
import BaseLayout from "~/layout/BaseLayout.vue";
</script>
