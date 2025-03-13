<script setup lang="ts">
import { refCart } from '@/models/cart'
import { asyncComputed } from '@vueuse/core'

const cart = refCart()
</script>

<template>
  <div class="cart">
    <h2 class="title is-4">Shopping Cart ({{ cart.length }})</h2>
    <ul>
      <li v-for="item in cart" :key="item.product.id">
        <img :src="item.product.thumbnail" :alt="item.product.title" />
        <span>
          {{ item.product.title }}
        </span>
        <span>
          <select v-model="item.quantity">
            <option v-for="n in 10" :key="n" :value="n">
              {{ n }}
            </option>
          </select>
          <span> x {{ item.product.price }} </span>
          <span> = {{ item.product.price * item.quantity }} </span>
        </span>
      </li>
    </ul>
    <h2 class="is-title-2">Total: ${{ cart.reduce((acc,item)) => acc + item.product.price}}</h2>
  </div>
</template>

<style scoped>
.cart {
  margin: 1rem;
}

li {
  display: flex;
  justify-content: space-between;
  img {
    width: 50px;
    height: 50px;
  }
}
</style>
