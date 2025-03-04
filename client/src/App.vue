<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import NotificationList from './components/NotificationList.vue';
import SlidingDrawer from './components/SlidingDrawer.vue';
</script>

<template>
  <header>
    
    <NavBar />
  </header>
  <div class="container body-Container">
    <NotificationList />
    <RouterView />
  </div>

  <SlidingDrawer>
    <ShoppingCart />
  </SlidingDrawer>
</template>

<style scoped>
body {
  background-color: aliceblue;
}

.body-Container {
  background-color: white;
}

</style>
