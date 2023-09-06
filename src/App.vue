<script setup>
import BackgroundDeg from './components/BackgroundDeg.vue';
import MyComponent from './components/MyComponent.vue';
</script>

<template>
  <div id="app">
    <p class="Title">CIBERPUNK 2099</p>
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
</style>
