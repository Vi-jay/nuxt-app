<template>
  <div>{{ params }}</div>
</template>

<script setup lang="ts">
import { useRoute } from "#app";

const { params } = useRoute();
</script>

<style lang="scss" scoped></style>
