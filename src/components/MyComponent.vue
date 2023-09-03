<template>
  <div>
    <h1 class="BigTitle">HOLA Grande</h1>
    <p class="Grenn">HOLA en verde.</p>
    <h2 class="Title">Título Secundario</h2>
    <p class="TilePlomo">Probando imagen y ruta assets.</p>
    <img src="@/assets/ico.png" alt="Ico" class="ico">
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensaje: 'Hola, casi me olvido del Laboratorio',
    };
  },
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

.ico {
  width: 50px;
  height: 50px;
}
</style>
