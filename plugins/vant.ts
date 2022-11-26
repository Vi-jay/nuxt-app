import Vant from "vant";
// 2. 引入组件样式
import "vant/lib/index.css";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vant);
});
