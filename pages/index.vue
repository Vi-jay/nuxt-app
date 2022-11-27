<template>
  <div id="Index">
    <home-nav ref="a" />
    <nuxt-link to="/page2">page2</nuxt-link>
    <p><nuxt-link to="/blog/1">1</nuxt-link></p>
    <p><nuxt-link to="/blog/2">2</nuxt-link></p>
    <nuxt-img src="/img.png" sizes="lg:100vw" />
    <img src="/img.png" alt="" />
    <p>{{ data }}</p>
  </div>
</template>
<script setup lang="ts">
import HomeNav from "~/components/home-nav.vue";
import { createError, navigateTo, useCookie, useFetch, useLazyFetch, useRequestHeaders, useRouter, useRuntimeConfig } from "#app";
import { FetchContext, FetchResponse } from "ofetch";
import { useFoo } from "~/composables/useFoo";
import { CommonPluginKey } from "~/plugins/common";
import { inject } from "#imports";

//可以客户端发给node端的cookies传给服务端 那么服务端返回的set-cookies怎么从node端设置给客户端呢
// const memberCookie = useCookie("memberInfo");
// const { data } = await useFetch("http://localhost:3006", {
//   headers: useRequestHeaders(["cookie"]),
//   onResponse(context: FetchContext & { response: FetchResponse<any> }): Promise<void> | void {
//     memberCookie.value = context.response.headers.get("set-cookie").replace(/memberInfo=(.*);.*/, "$1");
//   },
// });
// const [d1, d2] = await Promise.all([useFetch("https://api.nuxtjs.dev/mountains"), useFetch("https://api.nuxtjs.dev/mountains")]);
// useFetch可以传函数 这样就可以动态使用refresh操作了
// const { data: users, pending, refresh, error } = await useFetch(() => `users?page=${page.value}&take=6`, { baseURL: config.API_BASE_URL });
const { data } = await useFetch("http://lumtest.com/myip.json");
</script>
<style lang="scss">
@import "assets/common.scss";

#Index {
}
</style>
