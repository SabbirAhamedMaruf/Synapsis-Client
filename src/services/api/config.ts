// Prepending server route
import axiosLib, { type InternalAxiosRequestConfig } from "axios";
import { getConfig } from "../../utils/envHelper";

const axios = axiosLib?.create({
  baseURL: getConfig()?.serverURL,
});

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error) => {
    console.error("An error occured while processing request", error);
  }
);

export default axios;
