<template>
    <div className="not-found">
        <div className="center-content">
            <Panel header="Error 404" class="not-found-panel">
                <h1 className="not-found-title p-text-bold">404</h1>
                <p className="not-found-text">No se encontró la página ingresada</p>
            </Panel>
        </div>
    </div>
    <div className="background">
        <BackgroundDeg></BackgroundDeg>
    </div>
</template>

<script>
import Panel from 'primevue/panel';
import BackgroundDeg from "@/components/BackgroundDeg.vue";

export default {
    components: {
        BackgroundDeg,
        Panel,
    },
    name: 'not-found-404'
}
</script>

<style scoped>
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    justify-content: center;
}

.center-content {
    display: flex;
    flex-direction: column;
    align-items: center;
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
