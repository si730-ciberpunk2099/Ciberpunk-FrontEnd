<template>
    <div class="decorated-ico">
      <img src="../assets/ico.png" alt="Ico" class="ico">
    </div>
  </template>
  
  <script>
  export default {
    name: 'DecorateIco',
  };
  </script>
  
  <style scoped>
  .decorated-ico {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 10px rgb(255, 255, 255);
  }
  
  .ico {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  