import { defineNuxtPlugin } from "#app";
import type { App } from "@vue/runtime-core";
import type { InjectionKey } from "vue";
type OpenApiType = typeof OpenApi;
declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties extends OpenApiType {}
}

export const CommonPluginKey: InjectionKey<OpenApiType> = Symbol();
const OpenApi = {
  $calcPrice(price: number) {
    return `$${price.toFixed(2)}`;
  },
};

function CommonPlugin(app: App<any>, opt) {
  Object.assign(app.config.globalProperties, OpenApi);
  app.provide(CommonPluginKey, OpenApi);
}

//todo 将vue3注入全局的引入
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(CommonPlugin);
});
