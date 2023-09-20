<script setup>
import {useToast} from "primevue/usetoast";

const toast = useToast();

const items = [
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000});
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
            toast.add({severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    },
    {label: 'Upload', icon: 'pi pi-upload', to: '/fileupload'}
];

const save = () => {
    toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
};
</script>

<template>
    <div>
        <backgroundAnimatedComponent></backgroundAnimatedComponent>
        <navbar></navbar>
        <img src="@/assets/Tittle.png" alt="No carga el titulo" className="title-png">
    </div>
    <div className="conteiner-1">
        <Toast/>
        <SplitButton label="Comensar Ahora" :model="items" icon="pi pi-plus" @click="save" outlined class="mb-2"/>
    </div>
</template>

<script>
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
    width: 350px;
    height: auto;
}

.conteiner-1 {
    align-items: center;
    justify-content: center;
}
</style>