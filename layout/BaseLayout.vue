<template>
  <div class="min-h-screen flex flex-col">
    <Header/>

    <main>
      <slot/>
    </main>

    <Footer/>
  </div>
</template>
<script lang="ts" setup>
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
</script>
