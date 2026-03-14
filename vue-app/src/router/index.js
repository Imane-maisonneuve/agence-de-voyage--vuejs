import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import AddVoyageView from "../views/AddVoyageView.vue";
import VoyageView from "../views/VoyageView.vue";
import EditVoyageView from "../views/EditVoyageView.vue";
import AllVoyages from "../views/AllVoyagesView.vue";
import About from "../views/AboutView.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/allVoyages", name: "allVoyages", component: AllVoyages },
  { path: "/about", name: "about", component: About },
  {
    path: "/add-voyage",
    name: "add-voyage",
    component: AddVoyageView,
    meta: { requiresAuth: true },
  },
  { path: "/voyage/:id", name: "voyage", component: VoyageView },
  {
    path: "/edit-voyage/:id",
    name: "edit-voyage",
    component: EditVoyageView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
