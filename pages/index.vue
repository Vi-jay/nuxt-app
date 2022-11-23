<template>
  <div id="Index">
    <home-nav />
    <p>{{ data }}</p>
    <nuxt-link to="/page2">page2</nuxt-link>
    <nuxt-img src="/img.png" sizes="lg:100vw" />
    <img src="/img.png" alt="" />
  </div>
</template>
<script setup lang="ts">
import HomeNav from "~/components/home-nav.vue";
import { useFetch } from "#app";

const { data } = await useFetch("http://lumtest.com/myip.json");
</script>
<style lang="scss">
@import "assets/common.scss";

#Index {
}
</style>
