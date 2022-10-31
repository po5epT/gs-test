import { createApp } from "vue";
import { createPinia } from "pinia";

import AxiosPlugin from "@/plugins/axios";
import TheApp from "@/components/TheApp.vue";

import router from "./router";

import "@/scss/app.scss";

createApp(TheApp).use(router).use(createPinia()).use(AxiosPlugin).mount("#app");
