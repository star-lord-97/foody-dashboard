import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import ResetPassword from "../views/ResetPassword.vue";
import OrdersManagement from "../components/OrdersManagement.vue";
import ItemsManagement from "../components/ItemsManagement.vue";
import EditItem from "../components/EditItem.vue";
import KitchenView from "../components/KitchenView.vue";
import BuildingsManagement from "../components/BuildingsManagement.vue";
import PromoCodes from "../components/PromoCodes.vue";
import PushNotifications from "../components/PushNotifications.vue";
import Users from "../components/Users.vue";
import Settings from "../components/Settings.vue";

const routes = [
    {
        path: "/orders",
        name: "orders",
        component: OrdersManagement,
    },
    {
        path: "/items/:id",
        name: "items",
        component: EditItem,
    },
    // {
    //     path: "/items",
    //     name: "items",
    //     component: ItemsManagement,
    // },
    {
        path: "/kitchen",
        name: "kitchen",
        component: KitchenView,
    },
    {
        path: "/buildings",
        name: "buildings",
        component: BuildingsManagement,
    },
    {
        path: "/promo-codes",
        name: "promo-codes",
        component: PromoCodes,
    },
    {
        path: "/notifications",
        name: "notification",
        component: PushNotifications,
    },
    {
        path: "/users",
        name: "users",
        component: Users,
    },
    {
        path: "/settings",
        name: "settings",
        component: Settings,
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
