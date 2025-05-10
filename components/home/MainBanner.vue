<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "MainBanner"
})
</script>

<template>
  <div class="flex p-8 h-full">
    <div
      :style="{backgroundImage: 'url(https://www.bostonteapartyship.com/wp-content/uploads/2019/09/benjamin-franklin-portrait.jpg)'}"
      class="m-auto w-full h-full bg-cover"
    ></div>
  </div>
</template>
