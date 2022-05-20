import { createRouter, createWebHistory } from "vue-router";

import IndexPlace from "../components/Place/IndexPlace";
import ViewPlace from "@/components/Place/ViewPlace";

const routes = [
  {
    path: "/",
    redirect: { name: "place_index" },
  },
  {
    path: "/place",
    name: "place_index",
    component: IndexPlace,
  },
  {
    path: "/place/:place_id",
    name: "place_view",
    component: ViewPlace,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
