<script setup lang="ts">
import { getOne } from '@/models/products'
import { useRoute } from 'vue-router'

const route = useRoute('/products/[id]')
const product = getOne(route.params.id)
</script>

<template>
  <div>
    <h1 class="title">{{ product.title }} }}</h1>
    <dev class="product">
      <div class="product-info"></div>
    </dev>
  </div>
</template>

<style scoped>
.product {
  display: flex;
  justify-content: space-between;
  margin: 1em;
  padding: 1em;
}
</style>
