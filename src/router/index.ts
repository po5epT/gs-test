import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import categoryRoutes from "@/modules/category/routes";
import productRoutes from "@/modules/product/routes";
import cartRoutes from "@/modules/cart/routes";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  ...categoryRoutes,
  ...productRoutes,
  ...cartRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
