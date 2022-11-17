// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      htmlAttrs: {
        lang: "zh-cn",
      },
    },
  },
  css: ["~/assets/theme.scss"],
  components: false,
});
