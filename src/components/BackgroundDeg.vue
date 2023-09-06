<template>
    <div class="background-deg"></div>
  </template>
  
  <script>
  export default {
    name: 'BackgroundDeg',
  };
  </script>
  
  <style scoped>
  .background-deg {
    background: radial-gradient(circle at center, #060055, #10002b);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
  </style>
  