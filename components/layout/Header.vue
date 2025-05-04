<script lang="ts">
import { defineComponent } from 'vue'
import ApplicationLogo from "~/components/layout/ApplicationLogo.vue";
import HeaderMenu from "~/components/layout/HeaderMenu.vue";
import HeaderSearchBar from "~/components/layout/HeaderSearchBar.vue";

export default defineComponent({
  name: "Header",
  components: { HeaderSearchBar, HeaderMenu, ApplicationLogo }
})
</script>

<template>
  <header>
    <div class="flex w-full border-b border-slate-300 justify-center py-4">
      <div class="max-w-6xl w-full flex items-center px-4">
        <div class="mr-auto">
          <ApplicationLogo/>
        </div>
        <div class="mx-auto">
          <HeaderMenu/>
        </div>
        <div class="ml-auto">
          <HeaderSearchBar/>
        </div>
      </div>
    </div>
  </header>
</template>

