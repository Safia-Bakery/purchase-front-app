import axios, { AxiosInstance, AxiosResponse } from "axios";

const baseApi: AxiosInstance = axios.create({
  baseURL: "https://api.purchase.safiabakery.uz",
});

const invalidarr = ["undefined", "null", ""];

baseApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")?.toString();
    // const accessToken = !invalidarr?.includes(token!) ? token! : "";

    if (!!token) {
      if (config.headers) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

baseApi.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      logoutUser();
    }
    return Promise.reject(error);
  }
);

function logoutUser() {
  localStorage.removeItem("token");
  // window.location.replace("/auth/login");
}

export default baseApi;
