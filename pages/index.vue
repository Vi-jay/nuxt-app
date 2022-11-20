<template>
  <div id="Index">
    <home-nav />
    <p>{{ data }}</p>
    <nuxt-link to="/page2">page2</nuxt-link>
    <nuxt-img provider="cloudinary" src="/cld-sample-5.jpg" sizes="xs:20px md:50px lg:100px" />
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
