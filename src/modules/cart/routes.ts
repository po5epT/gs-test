import { RouteRecordRaw } from "vue-router";

export default [
  {
    path: "/cart",
    name: "cart",
    component: () =>
      import(/* webpackChunkName: "cart" */ "./views/CartView.vue"),
  },
] as Array<RouteRecordRaw>;
