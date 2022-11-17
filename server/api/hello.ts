export default defineEventHandler(async (event) => {
  return await $fetch("http://lumtest.com/myip.json");
});
