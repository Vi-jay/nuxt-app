<template>
  <div id="Index">
    <home-nav />
    <p>{{ data }}</p>
    <nuxt-link to="/page2">page2 </nuxt-link>
  </div>
</template>
<script setup lang="ts">
import HomeNav from "~/components/home-nav.vue";
import axios from "axios";
const data = (await axios.get("http://lumtest.com/myip.json")).data;
</script>
<style lang="scss">
@import "assets/common.scss";

#Index {
}
</style>
