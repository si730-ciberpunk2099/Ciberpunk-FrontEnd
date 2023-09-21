<script setup>
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import { ref } from "vue";
const visible = ref(false);
</script>

<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button class= "custom-button" icon = "pi pi-angle-double-left" severity="info" outlined @click="visible = true" />
    </div>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible" position="right">
            <ul>
                <li><router-link to="/Home">{{ $t('Home')}}</router-link></li>
                <li><router-link to="/ComparacionPrecios">{{ $t('ComparacionPrecios')}}</router-link></li>
                <li><router-link to="/Catalogo">{{ $t('Catalogo')}}</router-link></li>
                <li><router-link to="/Nosotros">{{ $t('Nosotros')}}</router-link></li>
                <li><router-link to="/Tiendas">{{ $t('Tiendas')}}</router-link></li>
                <li><router-link to="/Comentarios">{{ $t('Comentarios')}}</router-link></li>
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
