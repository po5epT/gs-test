import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cart",
    name: "cart",
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/CartView.vue"),
  },
  {
    path: "/category/:id",
    name: "category",
    component: () =>
      import(/* webpackChunkName: "category" */ "../views/CategoryView.vue"),
  },
  {
    path: "/product/:id",
    name: "product",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/ProductView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
