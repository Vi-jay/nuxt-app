<template>
  <div id="Index">
    <home-nav />
    <p>{{ data }}</p>
    <nuxt-link to="/page2">page2 </nuxt-link>
  </div>
</template>
<script setup lang="ts">
import { sleepAsync } from "~/utils";
import HomeNav from "~/components/home-nav.vue";
const data = await (await fetch("https://nuxt-app-virid.vercel.app/api/hello")).json();
</script>
<style lang="scss">
@import "assets/common.scss";

#Index {
}
</style>
