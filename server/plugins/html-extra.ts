export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    html.bodyAppend.push("<hr>Appended by custom plugin");
  });

  nitroApp.hooks.hook("render:response", (response, { event }) => {});
});
