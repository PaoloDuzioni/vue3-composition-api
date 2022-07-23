<script setup>
import { ref, computed, onMounted } from 'vue';
import useGreetings from '@/composables/useGreetings';
import Counter from '@/components/Counter.vue';

// HOOKS
const { helloMessage, sayHello } = useGreetings('Paolo');

// REACTIVE DATA
const capacity = ref(3);
const attending = ref(['Paolo', 'Bea', 'Nina']);

// COMPUTED
const spaceLeft = computed(() => capacity.value - attending.value.length);

// LIFECYCLE METHODS
// beforeCreate() and created() are not needed when using the Composition API.
// This is because beforeCreate() is called right before setup() and
// created() is called right after setup().
// Thus, we simply put code inside setup() that would normally be in these hooks,
// such as API calls.
onMounted(() => {
    console.log(helloMessage.value);
});

// METHODS
const incraseCapacity = () => {
    // capacity++ not working coz it is a reactive object:
    // console.log(capacity);
    // We need to access its value property:
    capacity.value++;
    // In <template> the value is read automatically so there
    // we can just use {{ capacity }} (see below)
};
</script>

<template>
    <h1>{{ helloMessage }}</h1>
    <button @click="sayHello">Say hello again</button>

    <h2>Attending</h2>
    <ul>
        <li v-for="(name, index) in attending" :key="index">{{ name }}</li>
    </ul>
    <p>Spaces left: {{ spaceLeft }} out of: {{ capacity }}</p>
    <button @click="incraseCapacity">Increase Capacity</button>

    <Counter title="Counter" />
</template>

<style>
body {
    font-family: sans-serif;
}
</style>
