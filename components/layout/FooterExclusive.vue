<script lang="ts">
import { defineComponent } from 'vue'
import IconInputArrowRight from "~/components/icons/IconInputArrowRight.vue";

export default defineComponent({
  name: "FooterExclusive",
  components: { IconInputArrowRight }
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-6">
      <h3 class="text-2xl font-bold">Exclusive</h3>
      <div class="text-xl">Subscribe</div>
      <div class="text-base">Get 10% off your first order</div>
    </div>
    <div class="relative">
      <form>
        <input
          class="border-2 border-slate-200 rounded-md px-3 py-2 w-full
          focus:outline-none focus:ring-1 focus:ring-indigo-500"
          placeholder="Your Email"
          type="email"/>
        <button class="cursor-pointer" type="submit">
          <IconInputArrowRight class="top-1/2 transform -translate-y-1/2 right-2 absolute"/>
        </button>
      </form>
    </div>
  </div>
</template>
