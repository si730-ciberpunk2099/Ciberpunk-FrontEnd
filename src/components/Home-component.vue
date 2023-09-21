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
    <div class="base">
        <background-animated-component></background-animated-component>
        <navbar></navbar>
        <img src="@/assets/Tittle.png" alt="No carga el titulo" className="title-png">
    </div>
    <div className="conteiner-1">
        <Toast/>
        <SplitButton label="Comensar Ahora" :model="items" icon="pi pi-plus" @click="save" outlined class="mb-2"/>
        <TabView class="vistas3">
            <TabPanel header="PC Gaming">
                <p>
                    Las computadoras gamers son equipos de escritorio que están diseñados específicamente para reproducir los videojuegos, por ello se requiera una increible potencia de procesamiento gráfico
                </p>
            </TabPanel>
            <TabPanel header="PC Designer">
                <p>
                    Las computadoras gamers son equipos de escritorio que están diseñados específicamente para reproducir los videojuegos con la misma calidad (y muchas veces hasta muy superior)
                </p>
            </TabPanel>
            <TabPanel header="PC Profesional">
                <p>
                    Las computadoras gamers son equipos de escritorio que están diseñados específicamente para reproducir los videojuegos con la misma calidad (y muchas veces hasta muy superior)
                </p>
            </TabPanel>
        </TabView>
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
.base {
    z-index: -1;
}
.mb-2{
    margin-bottom: 50px;
}
.vistas3{
    position: relative;
}
.conteiner-1 {
    z-index: 1000;

}
</style>