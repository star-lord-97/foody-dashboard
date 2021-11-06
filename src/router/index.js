import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import ResetPassword from "../views/ResetPassword.vue";
import OrdersManagement from "../components/OrdersManagement.vue";
import ItemsManagement from "../components/ItemsManagement.vue";
import ExtrasManagement from "../components/ExtrasManagement.vue";
import EditItem from "../components/EditItem.vue";
import KitchenView from "../components/KitchenView.vue";
import BuildingsManagement from "../components/BuildingsManagement.vue";
import PromoCodes from "../components/PromoCodes.vue";
import PushNotifications from "../components/PushNotifications.vue";
import Users from "../components/Users.vue";
import Settings from "../components/Settings.vue";
import SystemUsers from "../components/SystemUsers.vue";
import store from "../store";

const routes = [
    {
        path: "/",
        redirect: "/orders",
    },
    {
        path: "/orders",
        name: "orders",
        component: OrdersManagement,
        meta: { adminsOnly: true },
    },
    {
        path: "/items/:id",
        name: "item",
        component: EditItem,
        meta: { adminsOnly: true },
    },
    {
        path: "/items",
        name: "items",
        component: ItemsManagement,
        meta: { adminsOnly: true },
    },
    {
        path: "/extras",
        name: "extras",
        component: ExtrasManagement,
        meta: { adminsOnly: true },
    },
    {
        path: "/kitchen",
        name: "kitchen",
        component: KitchenView,
    },
    {
        path: "/buildings",
        name: "buildings",
        component: BuildingsManagement,
        meta: { adminsOnly: true },
    },
    {
        path: "/promo-codes",
        name: "promo-codes",
        component: PromoCodes,
        meta: { adminsOnly: true },
    },
    {
        path: "/notifications",
        name: "notification",
        component: PushNotifications,
        meta: { adminsOnly: true },
    },
    {
        path: "/users",
        name: "users",
        component: Users,
        meta: { adminsOnly: true },
    },
    {
        path: "/settings",
        name: "settings",
        component: Settings,
        meta: { adminsOnly: true },
    },
    {
        path: "/sys-users",
        name: "system users",
        component: SystemUsers,
        meta: { adminsOnly: true },
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: { loggedOutOnly: true },
    },
    {
        path: "/reset-password",
        name: "reset-password",
        component: ResetPassword,
        meta: { loggedOutOnly: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.beforeEach((to, from, next) => {
//     if (to.matched.some((record) => record.meta.loggedOnly)) {
//         if (!store.getters.isLogged) {
//             store.dispatch("logout");
//             next({ path: "/login" });
//         } else {
//             next();
//         }
//     } else if (to.matched.some((record) => record.meta.adminsOnly)) {
//         if (!store.getters.isAdmin) {
//             next({ path: "/kitchen" });
//         } else {
//             next();
//         }
//     } else if (to.matched.some((record) => record.meta.loggedOutOnly)) {
//         if (store.getters.isLogged) {
//             next({ path: "/" });
//         } else {
//             next();
//         }
//     } else {
//         next();
//     }
// });

export default router;
