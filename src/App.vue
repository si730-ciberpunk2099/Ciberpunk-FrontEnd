<script setup>
</script>

<template>
  <div id="app">
    <img src="@/assets/Tittle.png" alt="No carga el titulo" class="title-png">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
};
</script>

<style scoped>
.app {
display: flex;
flex-direction: column;
}

.title-png {
position: fixed;
top: 10px;
left: 20px;
width: 500px;
height: auto;
}
</style>

