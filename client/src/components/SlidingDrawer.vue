<script setup lang="ts">

</script>

<template>
    <div class="sliding-drawer">
        <slot>

        </slot>
    </div>
</template>

<style scoped>
.sliding-drawer {
    position: fixed;
    top: 30;
    bottom: 0;
    left: 0;
    width: 20rem;
    background-color: white;
    box-shadow: -1px 0px 7px rgba(0, 0, 0, 0.5);
    transform: translateX(18rem);
    transition: transform 0.3s ease-out;
}

.sliding-drawer.open, .sliding-drawer:hover {
    transform: translateX(0);
}
</style>