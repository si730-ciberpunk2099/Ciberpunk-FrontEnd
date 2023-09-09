<script setup>
import BackgroundDeg from './components/BackgroundDeg.vue';
import MyComponent from './components/MyComponent.vue';

</script>

<template>
  <div id="app">
    <img src="@/assets/Tittle.png" alt="No carga el titulo" class="title-png">
    <p class="Title">{{ $t('Titulaso')}}</p>
    <MyComponent></MyComponent>
    <BackgroundDeg></BackgroundDeg>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    BackgroundDeg,
    MyComponent,
  },
};
</script>

<style scoped>

.app{
  flex-direction:column;
}
.Title {
  font-size: 50px;
  color: #ffffff;
}
.title-png {
    position: fixed;
    top: 10px;
    left: 20px;
    width: 500px;
    height: auto;
}
</style>
