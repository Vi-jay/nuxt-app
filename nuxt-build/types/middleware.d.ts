import type { NavigationGuard } from "vue-router";
export type MiddlewareKey = "auth";
declare module "/Users/vijay2/Documents/GitHub/nuxt-app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>;
  }
}
