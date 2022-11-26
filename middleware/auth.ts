import { defineNuxtRouteMiddleware, navigateTo } from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
  //只有声明了该中间件的页面才会调用
  console.log("这里判断鉴权");
  // return navigateTo("/")
});
