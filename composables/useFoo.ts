import { useState } from "nuxt/app";

export const useFoo = () => {
  return useState("foo", () => "bar");
};
