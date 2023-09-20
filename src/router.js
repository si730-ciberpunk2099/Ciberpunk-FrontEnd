import { createRouter, createWebHistory } from "vue-router";
import MyComponent from "@/components/MyComponent.vue";
import Nofaund404 from "@/components/Nofaund404.vue";
import homeComponent from "@/components/Home-component.vue";
import aboutUsComponent from "@/components/AboutUs-Component.vue";

const routes = [
    { path: "/", component: homeComponent },
    { path: "/catalogo", component: homeComponent },
    { path: "/comparacion-precios", component: homeComponent },
    { path: "/sobre-nosotros", component: aboutUsComponent},
    { path: "/tiendas", component: MyComponent },
    { path: "/comentarios", component: MyComponent },
    { path: "/:pathMatch(.*)*", component: Nofaund404 },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;