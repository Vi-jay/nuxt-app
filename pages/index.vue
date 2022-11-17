<template>
  <div id="Index">
    <home-nav />
    <p>{{ data }}</p>
    <nuxt-link to="/page2">page2 </nuxt-link>
  </div>
</template>
<script setup lang="ts">
import HomeNav from "~/components/home-nav.vue";
const data = await (await globalThis.fetch("http://lumtest.com/myip.json")).json();
</script>
<style lang="scss">
@import "assets/common.scss";

#Index {
}
</style>
