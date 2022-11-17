import type { Config } from "tailwindcss";
export default <Partial<Config>>{
  theme: {},
  plugins: [require("@tailwindcss/line-clamp")],
};
