<script lang="ts">
import { defineComponent } from 'vue'
import IconArrow from "~/components/icons/IconArrow.vue";
import MainMenuItem from "~/components/home/MainMenuItem.vue";

export default defineComponent({
  name: "MainMenu",
  components: { MainMenuItem, IconArrow },
  data: () => ({
    items: [
      {
        title: "Item 1",
        link: "#"
      },
      {
        title: "Item 2",
        link: "#"
      },
      {
        title: "Item 3",
        link: "#"
      },
      {
        title: "Item 4",
        link: "#"
      },
      {
        title: "Item 5",
        link: "#"
      },
      {
        title: "Item 6",
        link: "#"
      },
    ]
  })
})
</script>

<template>
  <div class="py-6 flex flex-col">
    <template v-for="item of items">
      <MainMenuItem :link="item.link" :title="item.title"/>
    </template>
  </div>
</template>
