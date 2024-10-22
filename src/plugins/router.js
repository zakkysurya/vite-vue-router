import { createRouter, createWebHashHistory } from "vue-router";
import About from "@components/About.vue";
// Setting routes in Vue Router
const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("@components/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

// Creating a Vue Router instance
const router = createRouter({
  routes,
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // jika aplikasi Vue Anda di-deploy bukan di root domain (misalnya https://example.com/),
  // tetapi di suatu sub- folder(misalnya https://example.com/my-app/).
  // history: createWebHashHistory(import.meta.env.BASE_URL),
});

export default router;
