// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  modules: ["@nuxt/image-edge", "@nuxtjs/tailwindcss"],
  image: {
    // Generate images to `/_nuxt/image/file.png`
    // dir: 'assets/images'
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dw0o3bb4q/image/upload/v1668955514/",
    },
  },
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
