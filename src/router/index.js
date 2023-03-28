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
    {
      path: "/detailsSport/:id",
      name: "detailsSport",
      component: () => import("../views/DetailsSports.vue"),
    },
    {
      path: "/detailsBusiness/:id",
      name: "detailsBusiness",
      component: () => import("../views/DetailsBusiness.vue"),
    },
  ],
});

export default router;
