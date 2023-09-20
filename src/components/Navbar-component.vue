<script setup>
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import { ref } from "vue";
const visible = ref(false);
</script>

<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button class= "custom-button" icon = "pi pi-angle-double-right" severity="info" outlined @click="visible = true" />
    </div>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible" position="right">
            <ul>
                <li><router-link to="/comparacion-precios">Comparación de precios</router-link></li>
                <li><router-link to="/catalogo">Catálogo</router-link></li>
                <li><router-link to="/sobre-nosotros">Sobre nosotros</router-link></li>
                <li><router-link to="/tiendas">Tiendas</router-link></li>
                <li><router-link to="/comentarios">Comentarios</router-link></li>
            </ul>
        </Sidebar>
    </div>
</template>

<script>

</script>

<style scoped>
.custom-button{
    position: fixed;
    top: 20px;
    right: 20px;
}
</style>
