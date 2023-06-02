<script setup>
import buscador from './components/buscador.vue';
</script>
<template>
  <div class="main-container">
    <buscador />
  </div>
</template>
<style lang="scss" scoped>
.main-container{
  background-color: var(--background-color);
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3,1fr);
  grid-auto-rows: 30rem;
  align-content: center;
  @media (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 600px){
    grid-template-columns: repeat(2,1fr);
  }
}

</style>