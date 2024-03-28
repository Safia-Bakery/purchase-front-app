import axios, { AxiosInstance, AxiosResponse } from "axios";

const baseApi: AxiosInstance = axios.create({
  baseURL: "https://Api.purchase.safiabakery.uz",
});

baseApi.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(localStorage.getItem("token") || "null");

    if (accessToken) {
      if (config.headers) config.headers.token = accessToken;
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
    if (error.response.status === 401) {
      logoutUser();
    }
    return Promise.reject(error);
  }
);

function logoutUser() {
  localStorage.removeItem("token");
  window.location.replace("/auth/login");
}

export default baseApi;
