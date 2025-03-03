<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import NotificationList from './components/NotificationList.vue';
</script>

<template>
  <header>
    
    <NavBar />
  </header>
  <div class="container body-Container">
    <NotificationList />
    <RouterView />
  </div>
</template>

<style scoped>
body {
  background-color: aliceblue;
}

</style>
