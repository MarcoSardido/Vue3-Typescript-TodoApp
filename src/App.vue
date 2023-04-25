<script setup lang="ts">
import { v4 as uuid } from 'uuid'
import { ref } from 'vue';
import Todo from './components/Todo.vue';
import TodoForm from './components/TodoForm.vue'
import { TodoStatus, TodoType } from './types'

const todos = ref<TodoType[]>([
  { id: uuid(), title: 'sample', isDone: false }
])

const AddTodo = (formData: string) => {
  todos.value.push({
    id: uuid(),
    title: formData,
    isDone: false
  })
}

const updateTodoStatus = (id: string, type: TodoStatus) => {
  const currentTodo = todos.value.find(todo => todo.id === id)
  if (currentTodo) {
    if (type === TodoStatus.Completed) return currentTodo.isDone = true
    if (type === TodoStatus.Pending) return currentTodo.isDone = false
  }
}

const deleteTodo = (id: string) => {
  todos.value = todos.value.filter(todo => todo.id !== id)
}

</script>
<template>
  <div class="container">
    <div class="todo">
      <h2>Vue3 + Typescript</h2>
      <div class="form-container">
        <TodoForm @handleAddTodo="AddTodo"/>
      </div>
      <div class="todo-container">
        <div class="empty-label" v-if="todos.length === 0">
          No todos available
        </div>
        <Todo v-else v-for="todo in todos" :key="todo.id" :todoData="todo"
          :updateTodoStatus="updateTodoStatus" :deleteTodo="deleteTodo" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>