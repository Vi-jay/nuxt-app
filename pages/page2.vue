<template>
  <div id="Page2">
    <nuxt-link to="/">home</nuxt-link>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta } from "#imports";

definePageMeta({
  middleware: "auth",
});
</script>
<style scoped lang="scss">
@import "assets/common.scss";
#Page2 {
}
</style>
