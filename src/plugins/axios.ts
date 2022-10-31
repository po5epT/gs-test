import { Plugin } from "vue";
import axios, { AxiosInstance } from "axios";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $api: AxiosInstance;
  }
}

export default {
  install(app) {
    const api = axios.create({
      baseURL: process.env.VUE_APP_BASE_API_URL,
      headers: {
        Authorization: `Bearer ${process.env.VUE_APP_TOKEN}`,
      },
    });

    app.config.globalProperties.$api = api;
  },
} as Plugin;
