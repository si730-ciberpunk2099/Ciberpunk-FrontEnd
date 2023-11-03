import { createRouter, createWebHistory } from "vue-router";
import Nofaund404 from "@/components/Nofaund404.vue";
import homeComponent from "@/components/Home-component.vue";
import aboutUsComponent from "@/components/AboutUs-Component.vue";
import ComentsComponent from "@/components/Coments-component.vue";
import CatalogoComponent from "@/components/Catalogo-component.vue";
import loginComponent from "@/components/login-component.vue";
import registerComponent from "@/components/register-component.vue";
import catalogoComponent from "@/components/Catalogo-component.vue";

const routes = [
    { path: "/", component: homeComponent },

    { path: "/Home", component: homeComponent },
    { path: "/ComparacionPrecios", component: homeComponent },
    { path: "/Catalogo", component: CatalogoComponent },
    { path: "/Nosotros", component: aboutUsComponent },
    { path: "/Tiendas", component: homeComponent },
    { path: "/Comentarios", component: ComentsComponent },
    { path: "/Login", component: loginComponent },
    { path: "/Register", component: registerComponent },
    { path: "/Catalog", component: catalogoComponent },

    { path: "/:pathMatch(.*)*", component: Nofaund404 },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;