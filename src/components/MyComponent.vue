<script setup>
import CategoryRecVue from './Category-Rec.vue';
import decoratedIco from './decorated-ico.vue';
</script>

<template>
  <div class="conteiner">

    <h1 class="BigTitle">{{ $t('HOLAGrande')}}</h1>
    <p class="Grenn">HOLA en verde.</p>
    <h2 class="Title">Título Secundario</h2>
    <p class="TilePlomo">Probando imagen y ruta assets.</p>

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
      cpuOptions: ["Ryzen", "Intel", "Movistar xd"],
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

.conteiner {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 50px;
}

.left {
  flex: 1;
  width: auto;
}
.right {
  flex: 1;
}
</style>
