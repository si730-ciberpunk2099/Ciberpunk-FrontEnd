<script setup>
import CategoryRecVue from './Category-Rec.vue';
import decoratedIco from './decorated-ico.vue';
import Calendar from 'primevue/calendar';
import { ref } from "vue";

const date = ref();
</script>

<template>
  <div class="conteiner">

    <h1 class="BigTitle">{{ $t('HOLAGrande')}}</h1>
    <p class="Grenn">{{ $t('Subtitulo')}}</p>
    <h2 class="Title">{{ $t('Subtitulo2')}}</h2>
    <p class="TilePlomo">{{ $t('Description')}}</p>

    <div class="card flex justify-content-center">
        <Calendar v-model="date" />
    </div>

    <div class="left">
      <decoratedIco></decoratedIco>
      <decoratedIco></decoratedIco>
      <decoratedIco></decoratedIco>
    </div>

    <div class="right">
      <CategoryRecVue title="CPU" :options="cpuOptions" />
    </div>

  </div>
</template>

<script>
export default {
  components: {
    CategoryRecVue, 
    decoratedIco,
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

.BigTitle {
  font-size: 24px;
  color: green;
}

.conteiner{
    display:flex;
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
  display:flex;
  flex-direction: row;
  flex: 1;
  width: auto;
}
.right {
  flex: 1;
}
</style>
