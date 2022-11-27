import { NuxtModule } from "@nuxt/schema";
declare module "@nuxt/schema" {
  interface NuxtConfig {
    ["image"]?: typeof import("@nuxt/image-edge").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>;
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>;
  }
  interface RuntimeConfig {
    app: {
      baseURL: string;

      buildAssetsDir: string;

      cdnURL: string;
    };

    apiSecret: string;

    xxx: string;
  }
  interface PublicRuntimeConfig {
    apiBase: string;
  }
}
