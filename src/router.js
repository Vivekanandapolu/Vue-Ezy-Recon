import { createWebHistory, createRouter } from "vue-router";
import LoginPage from "./components/pages/User management/LoginPage.vue";
import washRoutes from "./components/pages/Wash Invoice Module/washRoutes";
import GlobalDashboard from "./components/pages/Global Dashboard/GlobalDashboard.vue";
const routes = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/home",
    component: GlobalDashboard,
  },
  ...washRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
