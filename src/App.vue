<script setup>
import navBar from '../src/components/nav-bar.vue'
import { ref } from 'vue'
</script>
<template>
  <navBar/>
  <div class="main-container">
    <router-view />
  </div>
</template>
