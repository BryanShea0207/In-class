<script setup lang="ts">
import { getAll, type Product } from '@/models/products'

const products = getAll()

function addToCart(product: Product) {
  console.log('Add to Cart', product)
}
</script>

<template>
  <div>
    <h1 class="title">Products</h1>
    <div class="shelf">
      <div class="product" v-for="product in products.items" :key="product.id">
        <div class="product-image">
          <RouterLink :to="/products/${product.id}">
            <img :src="product.thumbnail" />
          </RouterLink>
          <div class="product-info">
            <h2>{{ product.title }}</h2>
            <p>{{ product.description }}</p>
            <span class="price">${{ product.price }}</span>
            <button class="button is-success" @click="addToCart(product)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shelf {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.shelf .product {
  width: 30%;
  margin: 1em;
  padding: 1 em;
  border: 1px solid #ccc;
  border-radius:;
}

.price {
}

.button.is-success {
  float: right;
}
</style>
