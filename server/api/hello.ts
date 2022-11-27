import { defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
  const res = event.node.res;
  res.writeHead(302, { Location: "/page2" });
  return res.end();
});
