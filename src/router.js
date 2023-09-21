import { createRouter, createWebHistory } from "vue-router";
import Nofaund404 from "@/components/Nofaund404.vue";
import homeComponent from "@/components/Home-component.vue";
import aboutUsComponent from "@/components/AboutUs-Component.vue";

const routes = [
    { path: "/", component: homeComponent },

    { path: "/Home", component: homeComponent },
    { path: "/ComparacionPrecios", component: homeComponent },
    { path: "/Catalogo", component: homeComponent },
    { path: "/Nosotros", component: aboutUsComponent },
    { path: "/Tiendas", component: homeComponent },
    { path: "/Comentarios", component: homeComponent },

    { path: "/:pathMatch(.*)*", component: Nofaund404 },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;