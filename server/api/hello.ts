export default defineEventHandler(async (event) => {
  const res = await fetch("http://lumtest.com/myip.json");
  return await res.json();
});
