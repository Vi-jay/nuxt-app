import axios from "axios";

export default defineEventHandler(async (event) => {
  const res = await axios.get("http://lumtest.com/myip.json");
  return res.data;
});
