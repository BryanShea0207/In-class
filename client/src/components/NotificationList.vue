<script setup lang="ts">
import { ref } from 'vue';

    const notifications = ref([
        { text : 'This is a primary Notification #1', type: 'success'},
        { text : 'This is a primary Notification #2', type: 'warning'},
        { text : 'This is a primary Notification #3', type: 'danger'},
        { text : 'This is a primary Notification #4', type: 'info'},
    ]);
    
    function removeNotification(index: number) {
        notifications.value.splice(index, 1);
    }
</script>

<template>
    <div>
        <div v-for="(message, index) in notifications" :key="index" 
            class="notification is-success is-light" :class="`is-${message.type}`">
            <button class="delete" @click="removeNotification(index)"></button>
            {{ message.text }}
        </div>
    </div>
</template>

<style scoped>

</style>