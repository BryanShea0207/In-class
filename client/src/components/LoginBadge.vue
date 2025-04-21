<script setup lang="ts">

import {get, getAll, type User} from '@/models/users'
import { ref } from 'vue' 

const users = ref([]);


</script>

<template>
    <div class="buttons">
        <a class="button is-primary">
          <strong>Sign up</strong>
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="button is-light"> Login </a>
          <div class="navbar-dropdown">
            <a class="navbar-item button"> About </a>
          </div>
        </div>
    </div>
</template>