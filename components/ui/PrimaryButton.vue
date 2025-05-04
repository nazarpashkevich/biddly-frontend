<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "PrimaryButton",
  props: {}
})
</script>

<template>
  <button
    class="px-4 py-3 rounded-md border border-slate-400 bg-indigo-700 text-white text-md hover:bg-indigo-800
      cursor-pointer">
    <slot/>
  </button>
</template>
