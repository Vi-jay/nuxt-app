import { Headers as Headers$1 } from "node-fetch-native";

console.log("ofetch已更新");
const vercelFetch = typeof fetch !== "undefined" && fetch;
const vercelHeaders = typeof Headers !== "undefined" && Headers;
const xfetch = vercelFetch || globalThis.fetch || createNodeFetch();
const xHeaders = vercelFetch || globalThis.Headers || Headers$1;
const ofetch = createFetch({ fetch: xfetch, Headers: xHeaders });
const $fetch = ofetch;

export { $fetch, xHeaders as Headers, createNodeFetch, xfetch as fetch, ofetch };
