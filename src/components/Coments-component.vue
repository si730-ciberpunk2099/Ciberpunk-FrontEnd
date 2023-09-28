<script setup>
import { ref } from "vue";

const value = ref('');
</script>

<template>
    <div class="contenedor-main">
        <background-animated-component></background-animated-component>
        <img src="@/assets/Tittle.png" alt="No carga el titulo" className="title-png">
        <Navbar></Navbar>
        <div class="contenedor-1">
            <img src="@/assets/Imagenes/trabajador.png" alt="No carga el titulo" className="iconpng">
            <Card class = "Card-1">
                <template #title> {{$t('TComentarios')}} </template>
                <template #content>
                    <p>
                        {{$t('ComantirosDescrip')}}
                    </p>
                </template>
            </Card>
        </div>
        <div class="contenedor-2">
            <Editor v-model="value" editorStyle="height: 150px" />
            <Button label="Enviar" icon="pi pi-check" />
        </div>
    </div>

</template>

<script>
import backgroundAnimatedComponent from "@/components/background-animated-component.vue";
import Navbar from "@/components/Navbar-component.vue";
import Card from 'primevue/card';
import Editor from 'primevue/editor';
import Button from 'primevue/button';
export default {
    name: "Coments-component",
    components: {
        Navbar,
        backgroundAnimatedComponent,
        Card,
        Editor,
        Button,
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
.iconpng{
    position: relative;
    min-width: 180px;
    width: 10%;
    height: auto;
}
.contenedor-1{
    position: relative;
    flex-direction: row;
    width: 75%;
    height: 25%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
.contenedor-2{
    position: relative;
    flex-direction: column;
}
.contenedor-main{
    background-color: #b9ffe4;
    display: flex;
    position: absolute;
    overflow: auto;

    flex-direction: column;

    align-items: center;
    justify-content: center;
    align-content: center;
    align-self: center;

    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
}
</style>