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
    this.$router.push('/Catalog');
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
                <SplitButton label = "Comensar Ahora" :model="items" icon="pi pi-plus" @click="save" outlined class="mb-2"/>
            </div>
            <TabView class="vistas3">
                <TabPanel header="Gaming">
                    <p>
                        {{$t('HomeGamingDescrip')}}
                    </p>
                </TabPanel>
                <TabPanel header="Diseñador">
                    <p>
                        {{$t('HomeDisignerDescrip')}}
                    </p>
                </TabPanel>
                <TabPanel header="Profesional">
                    <p>
                        {{$t('HomeProfessionalDescrip')}}
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