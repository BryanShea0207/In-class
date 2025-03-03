format on save setting could be turned on to allow automatically formating files after changes are saved

use pnpm dev forom the client folder to run the Vue app

Vue uses Hot module reloding

Vue file structure
src
assets
self-explanatory
components
a component is a piece of code that can display itself on a application (SFC single file component) they can have three parts template script and style
router

    views
        very similar to componets it is up to the dev how to organize them

### Reading view
<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

imports TheWelcome component and displays it

when it comes to script tags in SFC a regular script tag can be used or a "setup script tag" 

the slot tag can be used to make component templates to be filled in when used
