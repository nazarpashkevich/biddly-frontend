<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "SecondaryButton",
  props: {
    iconAlign: {
      type: String as PropType<'left' | 'right'>,
      default: 'left'
    }
  },
  computed: {
    iconPositionClass() {
      return this.iconAlign === 'left' ? 'left-4' : 'right-4'
    }
  }
})
</script>

<template>
  <div class="relative cursor-pointer hover:bg-indigo-50">
    <button
      class="px-4 py-3 rounded-md text-indigo-700 border-1 border-indigo-500 font-semibold  w-full"
    >
      <slot/>
    </button>
    <div :class="iconPositionClass" class="absolute right-2 top-1/2 transform -translate-y-1/2">
      <slot name="icon"/>
    </div>
  </div>
</template>
