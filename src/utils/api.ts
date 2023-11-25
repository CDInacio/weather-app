import axios from "axios";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Content-Type"] =
  "application/json;charset=utf-8";

export const api = axios.create({
  baseURL: "http://apiadvisor.climatempo.com.br/api/v1",
});

export const USER_TOKEN = axios.create({
  baseURL: "http://apiadvisor.climatempo.com.br/api-manager/user-token/",
});
