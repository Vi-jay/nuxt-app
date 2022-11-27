import type { Defu } from "defu";

declare const inlineConfig = {
  foo: 'import type { PluginOption, ResolvedConfig } from "vite";\nimport * as path from "path";\nimport * as fs from "fs";\nfunction sleepAsync(ttl: number) {\n  return new Promise((resolve) => setTimeout(resolve, ttl * 1000));\n}\n\nlet config: ResolvedConfig;\nexport default function myPlugin(): PluginOption {\n  return {\n    name: "my-plugin",\n    apply: "build",\n    enforce: "post",\n    //启动vite解析完成配置后执行\n    configResolved(resolvedConfig) {\n      config = resolvedConfig;\n    },\n    resolveId(id) {\n      if (id.endsWith("base.css")) return "\\0" + id;\n    },\n    //load是在transform之前做一些处理 但是此处还没读取到内容 只适合用于做虚拟模块\n    load(id) {\n      if (id.endsWith("base.css")) return `body{color:red}`;\n    },\n    transformIndexHtml(html) {\n      return html.replace(/<title>(.*?)<\\/title>/, `<title>33 replaced!</title>`);\n    },\n    //此处适合对代码做一些转换处理\n    transform(src, id) {\n      if (id.endsWith("base.css")) console.log(src);\n      return {\n        code: src,\n        map: null, // 如果可行将提供 source map\n      };\n    },\n    //此处文件已经全部输出 可以做一些cdn上传处理\n    async closeBundle() {\n      const buildDir = path.resolve(process.cwd(), config.build.outDir);\n      console.log("最后阶段，上传代码");\n    },\n  };\n}\n',
};
type ResolvedAppConfig = Defu<typeof inlineConfig, []>;

declare module "@nuxt/schema" {
  interface AppConfig extends ResolvedAppConfig {}
}
