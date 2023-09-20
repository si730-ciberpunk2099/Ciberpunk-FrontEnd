<script setup>
import Calendar from 'primevue/calendar';
import Navbar from "@/components/Navbar-component.vue";
import {ref} from "vue";

const date = ref();
import BackgroundDeg from "@/components/BackgroundDeg.vue";
import decoratedIco from "@/components/decorated-ico.vue";
import CategoryRecVue from "@/components/Category-Rec.vue";
import backgroundAnimatedComponent from "@/components/background-animated-component.vue";
</script>

<template>
    <div className="background">
        <backgroundAnimatedComponent></backgroundAnimatedComponent>
    </div>
    <div className="conteiner">

        <h1 className="BigTitle">{{ $t('HOLAGrande')}}</h1>
        <p className="Grenn">{{ $t('Subtitulo')}}</p>
        <h2 className="Title">{{ $t('Subtitulo2')}}</h2>
        <p className="TilePlomo">{{ $t('Description')}}</p>

        <div className="card flex justify-content-center">
            <Calendar v-model="date"/>
        </div>

        <div className="left">
            <decoratedIco></decoratedIco>
            <decoratedIco></decoratedIco>
            <decoratedIco></decoratedIco>
        </div>

        <div className="right">
            <CategoryRecVue title="CPU" :options="cpuOptions"/>
            <navbar></navbar>


        </div>

    </div>
</template>

<script>
export default {
    components: {
        CategoryRecVue,
        decoratedIco,
        backgroundAnimatedComponent,
    },
    data() {
        return {
            cpuOptions: ["Ryzen", "Intel", "Cambiate a Movistar xd"],
        };
    },
    name: 'MyComponent'
};
</script>

<style scoped>
.background {
    z-index: 1;
}

.BigTitle {
    font-size: 24px;
    color: green;
}

.conteiner {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.Grenn {
    color: green;
}

.Title {
    font-size: 18px;
    color: #888;
}

.TilePlomo {
    color: #888;
}

.left {
    display: flex;
    flex-direction: row;
    flex: 1;
    width: auto;
}

.right {
    flex: 1;
}
</style>
