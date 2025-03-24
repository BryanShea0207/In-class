<script setup lang="ts">
const bestClass = 'Web Programming'
</script>

<template>
  <main>
    <h1 class="title">Welcome to {{ bestClass }}</h1>
    <h1 class="title">Anonymous Feedback Form</h1>
    <h2 class="subtitle">Enter your feedback here...</h2>
    <form action="#" class="form" method="post">
      <textarea class="textarea" placeholder="Tell"></textarea>
    </form>
  </main>
</template>
