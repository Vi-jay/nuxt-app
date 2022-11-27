import { defineEventHandler, parseCookies, readBody } from "h3";
import { useStorage } from "nitropack/dist/runtime/virtual/storage";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cookies = parseCookies(event);
  //  需要在nuxt.config.ts里配置redis
  return body;
});
