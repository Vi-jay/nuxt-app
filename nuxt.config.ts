// https://v3.nuxtjs.org/api/configuration/nuxt.config
import legacy from "@vitejs/plugin-legacy";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      htmlAttrs: {
        lang: "zh-cn",
      },
    },
  },
  vite: {
    plugins: [
      legacy({
        targets: ["defaults"],
      }),
    ],
  },
  css: ["~/assets/theme.scss"],
  components: false,
});
