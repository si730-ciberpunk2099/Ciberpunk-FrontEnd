<script setup>
import {useToast} from "primevue/usetoast";
const toast = useToast();
const items = [
    {
        label: 'PC para Gaming',
        icon: 'pi pi-discord',
        command: () => {
            toast.add({severity: 'info', summary: 'Guardado', detail: 'Haz elegido PC Gaming', life: 3000});
        }
    },
    {
        label: 'PC para Diseñador',
        icon: 'pi pi-palette',
        command: () => {
            toast.add({severity: 'info', summary: 'Guardado', detail: 'Haz elegido Diseño Grafico', life: 3000});
        }
    },
    {
        label: 'PC Para Ingeniero',
        icon: 'pi pi-wrench',
        command: () => {
            toast.add({severity: 'info', summary: 'Guardado', detail: 'Haz elegido Ingeniero Profesional', life: 3000});
        }
    },
];

const save = () => {
    toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
};
</script>

<template>
    <div class="todo">
        <div class="conteiner-1">
            <background-animated-component></background-animated-component>
            <navbar></navbar>
            <img src="@/assets/Tittle.png" alt="No carga el titulo" className="title-png">
        </div>
        <div className="conteiner-2">
            <div class="boton-1">
                <Toast/>
                <SplitButton label="Comensar Ahora" :model="items" icon="pi pi-plus" @click="save" outlined class="mb-2"/>
            </div>
            <TabView class="vistas3">
                <TabPanel header="Gaming">
                    <p>
                        Las computadoras gaming son equipos de escritorio diseñados específicamente para ofrecer una experiencia de juego excepcional. Están equipadas con potentes procesadores gráficos y de alto rendimiento que permiten ejecutar videojuegos exigentes con fluidez y calidad visual. Además, su capacidad de personalización les permite adaptarse a las necesidades de cada jugador, ofreciendo un rendimiento óptimo para los títulos más recientes y exigentes del mercado.
                    </p>
                </TabPanel>
                <TabPanel header="Diseñador">
                    <p>
                        Las computadoras para diseño están diseñadas pensando en las necesidades de los profesionales creativos, como diseñadores gráficos y diseñadores de productos. Estas máquinas están optimizadas para ejecutar software de diseño gráfico y modelado 3D de manera eficiente. Ofrecen una potencia de procesamiento y una capacidad gráfica excepcionales para garantizar la creación de proyectos visuales de alta calidad. Además, su amplia gama de puertos y opciones de conectividad facilita la conexión de periféricos y pantallas adicionales, lo que es esencial para la productividad en el trabajo de diseño.
                    </p>
                </TabPanel>
                <TabPanel header="Profesional">
                    <p>
                        Las computadoras profesionales son sistemas de alto rendimiento diseñados para satisfacer las necesidades de usuarios que requieren potencia de procesamiento para tareas intensivas. Estas máquinas son ideales para profesionales como ingenieros, científicos de datos y otros especialistas que trabajan con aplicaciones y cargas de trabajo exigentes. Ofrecen un equilibrio entre potencia de CPU y GPU, junto con una amplia capacidad de almacenamiento y opciones de expansión, lo que las convierte en una elección sólida para aquellos que buscan un rendimiento confiable y versatilidad en su trabajo diario.
                    </p>
                </TabPanel>
            </TabView>
        </div>
    </div>
</template>

<script>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Toast from 'primevue/toast';
import Navbar from "@/components/Navbar-component.vue";
import backgroundAnimatedComponent from "@/components/background-animated-component.vue";
import SplitButton from "primevue/splitbutton";

export default {
    name: "Home-component",
    components: {
        Navbar,
        backgroundAnimatedComponent,
        SplitButton,
    }
}
</script>

<style scoped>
.title-png {
    position: fixed;
    top: 10px;
    left: 20px;
    width: 300px;
    height: auto;
}
.mb-2{
    margin-bottom: 50px;
    transform: translate(-50%,0%);
}
.todo{
    display: flex;
    position: absolute;

    flex-direction: column;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
}
.conteiner-2 {
    padding: 5px;
    width: 50%;
    transform: translate(50%,0%);
    position: relative;
}
.boton-1{
    flex-direction: row;
    align-content: center;
    transform: translate(50%,0%);
}
</style>