import { createRouter, createWebHistory } from "vue-router";
import UserView from "../views/UserView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/users",
    name: "users",
    component: UserView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
