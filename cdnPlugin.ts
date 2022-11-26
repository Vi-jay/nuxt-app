import type { PluginOption, ResolvedConfig } from "vite";
import * as path from "path";
import * as fs from "fs";
function sleepAsync(ttl: number) {
  return new Promise((resolve) => setTimeout(resolve, ttl * 1000));
}

let config: ResolvedConfig;
export default function myPlugin(): PluginOption {
  return {
    name: "my-plugin",
    apply: "build",
    enforce: "post",
    //启动vite解析完成配置后执行
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    resolveId(id) {
      if (id.endsWith("base.css")) return "\0" + id;
    },
    //load是在transform之前做一些处理 但是此处还没读取到内容 只适合用于做虚拟模块
    load(id) {
      if (id.endsWith("base.css")) return `body{color:red}`;
    },
    transformIndexHtml(html) {
      return html.replace(/<title>(.*?)<\/title>/, `<title>33 replaced!</title>`);
    },
    //此处适合对代码做一些转换处理
    transform(src, id) {
      if (id.endsWith("base.css")) console.log(src);
      return {
        code: src,
        map: null, // 如果可行将提供 source map
      };
    },
    //此处文件已经全部输出 可以做一些cdn上传处理
    async closeBundle() {
      const buildDir = path.resolve(process.cwd(), config.build.outDir);
      console.log("最后阶段，上传代码");
    },
  };
}
