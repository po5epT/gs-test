import { RouteRecordRaw } from "vue-router";

export default [
  {
    path: "/product/:id",
    name: "product",
    component: () =>
      import(/* webpackChunkName: "product" */ "./views/ProductView.vue"),
  },
] as Array<RouteRecordRaw>;
