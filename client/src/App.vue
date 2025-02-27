<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <header>
    
    <NavBar />
  </header>
  <div class="container body-Container">
    <RouterView />
  </div>
</template>

<style scoped>
body {
  background-color: aliceblue;
}

</style>
