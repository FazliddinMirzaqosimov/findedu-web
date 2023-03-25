import { getItem } from "./../service/helpers/persistance-storage";
import axios, { AxiosInstance } from "axios";

axios.defaults.baseURL = "http://3.138.61.64";
//  const instance:AxiosInstance=axios.create({
//     baseURL:'http://18.221.130.228'
// })

axios.interceptors.request.use((config) => {
  const token = getItem("token");
  console.log(config.headers);

  const authorization = token ? `Bareer ${token}` : "";
  config.headers.Authorization = authorization;
  return config;
});

export default axios;
