import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
const routes = [
  {
    path: "/",
    name: "zhu",
    component: () => import("../components/HelloWorld.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../components/HelloWorld.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
