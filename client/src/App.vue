<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import NotificationList from './components/NotificationList.vue'
import SlidingDrawer from './components/SlidingDrawer.vue'
import ShoppingCart from './components/ShoppingCart.vue'

const isShoppingCartOpen = ref(false)
</script>

<template>
  <header>
    <NavBar v-model:isShoppingCartOpen="isShoppingCartOpen" />
  </header>

  <div class="container body-container">
    <NotificationList />
    <RouterView />
  </div>

  <SlidingDrawer :isOpen="isShoppingCartOpen">
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
