import { getItem } from "./../service/helpers/persistance-storage";
import axios, { AxiosInstance } from "axios";

axios.defaults.baseURL = "http://3.138.61.64";

axios.interceptors.request.use((config) => {
  const token = getItem("token");

  const authorization = token ? `Bearer ${token}` : "";
  config.headers.Authorization = authorization;
  return config;
});

export default axios;
