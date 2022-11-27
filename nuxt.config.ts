import * as fs from "fs";

const isProd = process.env.NODE_ENV === "production";
export default defineNuxtConfig({
  buildDir: "nuxt-build",
  nitro: {
    storage: {
      // redis: {
      //   driver: "redis",
      //   /* redis connector options */
      //   port: 6379, // Redis port
      //   host: "127.0.0.1", // Redis host
      //   username: "", // needs Redis >= 6
      //   password: "",
      //   db: 0, // Defaults to 0
      //   tls: {}, // tls/ssl
      // },
    },
  },
  modules: ["@nuxt/image-edge", "@nuxtjs/tailwindcss"],
  image: {
    // Generate images to `/_nuxt/image/file.png`
    // dir: 'assets/images'
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dw0o3bb4q/image/upload/v1668955514/",
    },
  },
  experimental: {
    inlineSSRStyles: false,
    // externalVue:true
  },
  sourcemap: {
    client: isProd,
    server: true,
  },
  imports: {
    autoImport: false,
  },
  app: {
    baseURL: "/",
    buildAssetsDir: "/ast/",
    head: {
      htmlAttrs: {
        lang: "zh-cn",
      },
      link: [],
      style: [],
      script: [],
    },
    //production only nuxt-image不会应用这里的策略 而是需要单独应用他的baseURL 做响应式时用nuxt-image上传到cloudinary上可以省流量
    // cdnURL: "https://mycdn.org/",
  },
  appConfig: {
    //可以用于配置环境变量 与runtimeConfig不同的是 不会覆盖进程环境变量
    foo: fs.readFileSync("./cdnPlugin.ts", { encoding: "utf-8" }),
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    xxx: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },
  hooks: {
    close: async () => {
      if (!isProd) return;
      //todo 这里上传cdn
      // console.log(await globby(".output/**/*"));
    },
  },
  css: ["~/assets/theme.scss"],
  components: false,
  postcss: {
    plugins: {},
  },
  vite: {},
  typescript: {
    strict: false,
  },
  telemetry: false,
});
