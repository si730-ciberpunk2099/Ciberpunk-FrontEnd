<script setup>
</script>

<template>
    <div class="Contenedor">
        <background-animated-component></background-animated-component>
        <navbar></navbar>
        <h class = "Titulo">
            Sobre Nosotros
        </h>
    </div>
</template>

<script>
import backgroundAnimatedComponent from "@/components/background-animated-component.vue";
import Navbar from "@/components/Navbar-component.vue";
export default {
    components: {
        Navbar,
        backgroundAnimatedComponent,
    }
}
</script>

<style scoped>
.Titulo{
    font-family: Roboto, Helvetica, Arial, sans-serif;
    position: absolute;
    font-size: 60px;
    color: #5bb5d6;
}

.Contenedor {
    background-color: #b9ffe4;
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

</style>
