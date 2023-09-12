<template>
    <div class="not-found">
        <Panel header="Error 404" class="not-found-panel">
            <h1 class="not-found-title p-text-bold">404</h1>
            <p class="not-found-text">No se encontró la página ingresada</p>
        </Panel>
    </div>
</template>

<script>
import Panel from 'primevue/panel';

export default {
    components: {
        Panel,
    },
    name: 'nofaund-404'
}
</script>

<style scoped>
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
}

.not-found-panel {
    width: 80%;
    text-align: center;
}

.not-found-title {
    font-size: 10rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.7);
}

.not-found-text {
    font-size: 1.5rem;
    color: #333;
}
</style>
