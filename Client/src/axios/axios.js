import axios from "axios";

const URI = "http://127.0.0.1:2005/";

export const Base = axios.create({
  baseURL: `${URI}`,
});
