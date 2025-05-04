<script lang="ts">
import { defineComponent } from 'vue'
import FooterExclusive from "~/components/layout/FooterExclusive.vue";
import FooterNavigationGroup from "~/components/layout/FooterNavigationGroup.vue";
import { ApplicationConfig } from "~/config/application.config";
import FooterDownloadApp from "~/components/layout/FooterDownloadApp.vue";

export default defineComponent({
  name: "Footer",
  components: { FooterDownloadApp, FooterNavigationGroup, FooterExclusive },
  data: () => ({
    menu: ApplicationConfig.layout.footerMenu.groups
  })
})
</script>

<template>
  <footer class="mt-auto">
    <div class="flex flex-col w-full bg-black border-t border-slate-400 items-center">
      <div class="flex flex-wrap gap-14 justify-between text-slate-100 py-18 w-full px-16 max-w-[96rem]">
        <FooterExclusive/>
        <FooterNavigationGroup :items="menu.support.items" :title="menu.support.title"/>
        <FooterNavigationGroup :items="menu.account.items" :title="menu.account.title"/>
        <FooterNavigationGroup :items="menu.quickLink.items" :title="menu.quickLink.title"/>
        <FooterDownloadApp/>
      </div>
      <div class="py-1 mt-auto border-t border-slate-600 text-center w-full text-slate-600 text-sm">
        &copy; {{ new Date().getFullYear() }} Nazar Company. All rights reserved.
      </div>
    </div>
  </footer>
</template>

