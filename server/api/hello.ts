import axios from "axios";

export default defineEventHandler(async (event) => {
  return await axios.get("http://lumtest.com/myip.json");
});
