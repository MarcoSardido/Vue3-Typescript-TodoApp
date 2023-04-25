<script setup lang="ts">
import { ref } from 'vue';

const txtTodo = ref<string | null>('')
const emit = defineEmits(['handleAddTodo'])

const handleTodoForm = () => {
    emit('handleAddTodo', txtTodo.value)
    txtTodo.value = null
}
</script>
<template>
    <form @submit.prevent="handleTodoForm">
        <input v-model="txtTodo" required type="text" placeholder="Enter todo..." />
        <button>Add Todo</button>
    </form>
</template>
<style scoped>
input {
    width: 200px;
    margin-right: 5px;
    transition: all 0.30s ease-in-out;
    outline: none;
    padding: 10px 10px;
    border: 1px solid #e1e1e1;
    resize: none;
    border-radius: 5px;
    margin-bottom: 10px;
}

input:focus {
    box-shadow: 0 0 5px #485fed;
    padding: 10px 10px;
    border: 1px solid #485fed;
}

button {
    padding: 10px;
    border-radius: 5px;
    border: none;
    color: #485def;
    background: transparent;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 5px 0px;
    transition: all 0.3s ease-in-out;
}

button:hover {
    background: linear-gradient(to left, #485fed, rgba(255, 44, 118, .25)), #485fed;
    color: #fff;
}
</style>