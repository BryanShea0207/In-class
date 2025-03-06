<script setup lang="ts">
import { useNow } from '@vueuse/core'

const { now, pause, resume } = useNow({ controls: true })
</script>

<template>
  <div class="about">
    <h1 class="title">This is an about page</h1>
    <h2>About the best class at New Paltz</h2>
  </div>
  <div>
    <p>current time: {{ now }}</p>
    <input type="button" value="pause" @click="pause" />
    <input type="button" value="resume" @click="resume" />
  </div>
</template>
<style></style>
