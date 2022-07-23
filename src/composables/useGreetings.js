import { ref } from 'vue';

export default function useGreetings(name = 'World') {
    // Reactive data
    const helloMessage = ref(`Hello there ${name}`);

    // Methods
    const sayHello = () => alert(`${helloMessage.value}, again!`);

    return {
        helloMessage,
        sayHello,
    };
}
