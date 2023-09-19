import { createRouter, createWebHistory } from "vue-router";
import MyComponent from "@/components/MyComponent.vue";
import Nofaund404 from "@/components/Nofaund404.vue";
import DecorateIco from "@/components/decorated-ico.vue";

const routes = [
    { path: "/", component: MyComponent },
    { path: "/404", component: Nofaund404 },
    { path: "/tutorial", component: DecorateIco },
    { path: "/:pathMatch(.*)*", component: Nofaund404 },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;