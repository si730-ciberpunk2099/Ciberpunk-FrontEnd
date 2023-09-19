<template>
    <div class="navbar">
        <button class="p-button p-button-rounded p-button-secondary menu-toggle" @click="menuOpen = true">
            <i class="pi pi-bars"></i> Menú
        </button>
        <div class="menu" v-show="menuOpen">
            <ul>
                <li><router-link to="/comparacion-precios">Comparación de precios</router-link></li>
                <li><router-link to="/catalogo">Catálogo</router-link></li>
                <li><router-link to="/sobre-nosotros">Sobre nosotros</router-link></li>
                <li><router-link to="/tiendas">Tiendas</router-link></li>
                <li><router-link to="/comentarios">Comentarios</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuOpen: false,
        };
    },
};
</script>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50px;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 20px 10px;
}

.menu-toggle {
    cursor: pointer;
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;
    width: 100%;
    text-align: right;
}

.menu {
    width: 200px;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 20px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%; /* Ocupa todo el espacio vertical */
    overflow-y: auto; /* Agrega desplazamiento vertical si es necesario */
}

.menu ul {
    list-style: none;
    padding: 0;
}

.menu li {
    margin-bottom: 10px;
}

.menu a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
}
</style>
