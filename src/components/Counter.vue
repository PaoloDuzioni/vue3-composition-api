<script setup>
import { ref } from 'vue';

// Props
defineProps({
    title: { type: String, default: 'Counter Section' },
});

// Reactive data references
const count = ref(0);
</script>

<template>
    <section>
        <h1>{{ title }}</h1>
        <button @click="count++">You clicked me {{ count }} times.</button>
    </section>
</template>

<style scoped>
section {
    margin: 2rem 0;
    padding: 1rem 1rem 2rem;
    text-align: center;
    color: #fff;
    background: #000;
}
button {
    appearance: none;
    padding: 1rem;
    background: transparent;
    font-size: 1rem;
    color: #fff;
    border: 1px solid currentColor;
    border-radius: 0;
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
}
button:hover {
    box-shadow: 5px 5px 0 0 currentColor;
}
</style>
