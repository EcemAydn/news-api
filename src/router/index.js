import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sports",
      name: "sports",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SportsView.vue"),
    },
    {
      path: "/business",
      name: "business",
      component: () => import("../views/BusinessView.vue"),
    },
    {
      path: "/details/:id",
      name: "details",
      component: () => import("../views/DetailsHome.vue"),
    },
  ],
});

export default router;
