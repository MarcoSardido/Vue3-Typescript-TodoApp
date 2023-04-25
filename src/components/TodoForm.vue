<script setup lang="ts">
import { ref } from 'vue';

const txtTodo = ref('')
const handleTodoForm = () => {
    console.log(txtTodo.value)
}
</script>
<template>
    <form @submit.prevent="handleTodoForm">
        <input v-model="txtTodo" type="text" placeholder="Enter todo..." />
        <button>Add Todo</button>
    </form>
</template>
<style scoped>

</style>