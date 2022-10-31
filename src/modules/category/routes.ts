import { RouteRecordRaw } from "vue-router";

export default [
  {
    path: "/category/:id",
    name: "category",
    component: () =>
      import(/* webpackChunkName: "category" */ "./views/CategoryView.vue"),
  },
] as Array<RouteRecordRaw>;
