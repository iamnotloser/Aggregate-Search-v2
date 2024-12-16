import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import indexPage from "@/views/indexPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: indexPage,
  },
  {
    path: "/:category",
    component: indexPage,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
