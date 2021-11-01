import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import store from "./store";
import VCalendar from "v-calendar";

createApp(App).use(store).use(router).use(VCalendar, {}).mount("#app");
