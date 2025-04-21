<script setup lang="ts">
import { ref } from 'vue'
import { refCart } from '@/models/cart'
import LoginBadge from './LoginBadge.vue';
const isActive = ref(false)
const cart = refCart()

const props = defineProps<{
  isShoppingCartOpen?: boolean
}>()

const event = defineEmits<{ 'update:isShoppingCartOpen': [boolean] }>()
</script>

<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        :class="{ 'is-active': isActive }"
        @click="isActive = !isActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <RouterLink to="/" class="navbar-item">Home</RouterLink>
        <RouterLink to="/products" class="navbar-item">Products</RouterLink>
        <RouterLink to="/about" class="navbar-item">About</RouterLink>

        <a class="navbar-item"> Documentation </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> More </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> About </a>
            <a class="navbar-item is-selected"> Jobs </a>
            <a class="navbar-item"> Contact </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <button
            class="button"
            :class="{ 'is-active': props.isShoppingCartOpen }"
            @click="event('update:isShoppingCartOpen', !props.isShoppingCartOpen)"
          >
            <i class="fas fa-shopping-cart"></i>
            <span>{{ cart.length }}</span>
          </button>
        </div>
        <div class="navbar-item">
          <LoginBadge />
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.cart-length {
  position: absolute;
  top: 0;
  bottom: 0;
  transform: 50;
  translate: 50;
}
</style>
