import { createRouter, createWebHistory } from "vue-router";
import MyComponent from "@/components/MyComponent.vue";

const routes = [
    { path: "/", component: MyComponent },
    { path: "/category", component: MyComponent },
    { path: "/tutorial", component: MyComponent },
    { path: "/:pathMatch(.*)*", component: MyComponent },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;