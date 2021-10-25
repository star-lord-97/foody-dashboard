import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import ResetPassword from "../views/ResetPassword.vue";

const routes = [
    {
        path: "/",
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/reset-password",
        name: "reset-password",
        component: ResetPassword,
    },
];

const router = createRouter({
    history: createWebHistory("foody-dashboard"),
    routes,
});

export default router;
