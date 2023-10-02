<script setup>
import { ref } from 'vue';

const isFieldsetCollapsed = ref(true);
</script>

<template>
    <div class="Contenedor-1">
        <background-animated-component></background-animated-component>
        <navbar></navbar>

        <div class="Contenedor-2">
            <Card class="Titulo">
                <template #title>
                    <h1 class="sub-titulo">{{$t('Bienvenido') }} </h1>
                </template>
            </Card>
            <Card class="texto-main">
                <template #title>{{$t('Bienvenido') }} </template>
                <template #content>
                    <p>
                        {{$t('AboutUsDescrip') }}
                    </p>
                </template>
            </Card>

            <div class="cards">
                <Fieldset :toggleable="true" :collapsed="isFieldsetCollapsed" class = "card">
                    <template #legend>
                        <div class="flex align-items-center text-primary">
                            <span class="pi pi-user mr-2"></span>
                            <span class="font-bold text-lg"> Edery Renzo Abanto Vicente</span>
                        </div>
                    </template>
                    <p class="m-0">
                        {{$t('AboutUsEderyDescrip') }}
                    </p>
                    <img src="@/assets/Fotos/Edery.png" alt="Foto de Edery" className="Foto">
                </Fieldset>

                <Fieldset :toggleable="true" :collapsed="isFieldsetCollapsed" class = "card">
                    <template #legend>
                        <div class="flex align-items-center text-primary">
                            <span class="pi pi-user mr-2"></span>
                            <span class="font-bold text-lg"> Edery Renzo Abanto Vicente</span>
                        </div>
                    </template>
                    <p class="m-0">
                        {{$t('AboutUsEderyDescrip') }}
                    </p>
                    <img src="@/assets/Fotos/Frabrizio.png" alt="Foto de Edery" className="Foto">
                </Fieldset>

                <Fieldset :toggleable="true" :collapsed="isFieldsetCollapsed" class = "card">
                    <template #legend>
                        <div class="flex align-items-center text-primary">
                            <span class="pi pi-user mr-2"></span>
                            <span class="font-bold text-lg"> Edery Renzo Abanto Vicente</span>
                        </div>
                    </template>
                    <p class="m-0">
                        {{$t('AboutUsEderyDescrip') }}
                    </p>
                    <img src="@/assets/Fotos/Gianfranco.png" alt="Foto de Edery" className="Foto">
                </Fieldset>

                <Fieldset :toggleable="true" :collapsed="isFieldsetCollapsed" class = "card">
                    <template #legend>
                        <div class="flex align-items-center text-primary">
                            <span class="pi pi-user mr-2"></span>
                            <span class="font-bold text-lg"> Edery Renzo Abanto Vicente</span>
                        </div>
                    </template>
                    <p class="m-0">
                        {{$t('AboutUsEderyDescrip') }}
                    </p>
                    <img src="@/assets/Fotos/Mariano.png" alt="Foto de Edery" className="Foto">
                </Fieldset>

                <Fieldset :toggleable="true" :collapsed="isFieldsetCollapsed" class = "card">
                    <template #legend>
                        <div class="flex align-items-center text-primary">
                            <span class="pi pi-user mr-2"></span>
                            <span class="font-bold text-lg"> Edery Renzo Abanto Vicente</span>
                        </div>
                    </template>
                    <p class="m-0">
                        {{$t('AboutUsEderyDescrip') }}
                    </p>
                    <img src="@/assets/Fotos/Rodrigo.png" alt="Foto de Edery" className="Foto">
                </Fieldset>

            </div>
        </div>
    </div>
</template>

<script>
import Card from 'primevue/card';
import Fieldset from 'primevue/fieldset';
import backgroundAnimatedComponent from "@/components/background-animated-component.vue";
import Navbar from "@/components/Navbar-component.vue";
export default {
    components: {
        Navbar,
        backgroundAnimatedComponent,
        Card,
    }
}
</script>

<style scoped>
.Titulo{
    font-family: Roboto, Helvetica, Arial, sans-serif;
    position: relative;
    margin-top: 400px;
    margin-bottom: 20px;
    font-size: 60px;
    color: #ffffff;
    text-shadow: 0 0 50px rgb(100, 200, 250);
}
.Foto{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    padding: 2px;
}
.Contenedor-1 {
    display: flex;
    position: absolute;

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
.Contenedor-2 {
    padding: 20px;
    align-content: space-around;
    position: relative;
    width: 70%;
}
.card{
    padding: 10px;
    background-color: rgba(0, 255, 255, 0.39);
    margin: 20px;
}
</style>
