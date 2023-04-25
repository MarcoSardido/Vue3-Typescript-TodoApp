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
        <input v-model="txtTodo" type="text" placeholder="Enter todo..." />
        <button>Add Todo</button>
    </form>
</template>
<style scoped>

</style>