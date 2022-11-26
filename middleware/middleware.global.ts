import { defineNuxtRouteMiddleware } from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
  //每个路由都会运行
  console.log(to.path);
});
