<script lang="ts">
import { defineComponent } from 'vue'
import IconFacebook from "~/components/icons/social/IconFacebook.vue";
import IconTwitter from "~/components/icons/social/IconTwitter.vue";
import IconInstagram from "~/components/icons/social/IconInstagram.vue";
import IconLinkedIn from "~/components/icons/social/IconLinkedIn.vue";

export default defineComponent({
  name: "FooterDownloadApp",
  components: { IconLinkedIn, IconInstagram, IconTwitter, IconFacebook }
})
</script>

<template>
  <div class="flex flex-col gap-6">
    <h3 class="text-2xl font-semibold">Download App</h3>
    <div>
      <p class="text-sm">Save $3 with App New User Only</p>
      <img alt="download app link" class="mt-2" src="/assets/images/download-app-banner.png"/>
    </div>
    <div class="flex justify-between">
      <NuxtLink to="#">
        <IconFacebook/>
      </NuxtLink>
      <NuxtLink to="#">
        <IconTwitter/>
      </NuxtLink>
      <NuxtLink to="#">
        <IconInstagram/>
      </NuxtLink>
      <NuxtLink to="#">
        <IconLinkedIn/>
      </NuxtLink>
    </div>
  </div>
</template>
