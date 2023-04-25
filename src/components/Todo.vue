<script setup lang="ts">
import { IonIcon } from '@ionic/vue'
import { PropType } from 'vue'
import { TodoType, TodoStatus } from '../types'

type TodoProps = {
    updateTodoStatus: (id: string, type: TodoStatus) => void
    deleteTodo: (id: string) => void
}

const props = defineProps({
    todoData: {
        type: Object as PropType<TodoType>,
        required: true
    },
    updateTodoStatus: {
        type: Function as PropType<TodoProps['updateTodoStatus']>,
        required: true
    },
    deleteTodo: {
        type: Function as PropType<TodoProps['deleteTodo']>,
        required: true
    }
})
const { todoData, updateTodoStatus } = props
</script>
<template>
    <div class="todo">
        <div class="todo-title" v-if="todoData.isDone"><del>{{ todoData.title }}</del></div>
        <div class="todo-title" v-else>{{ todoData.title }}</div>
        <div class="button-group">
            <button v-if="todoData.isDone" @click="updateTodoStatus(todoData.id, TodoStatus.Pending)">
                <ion-icon name="close-sharp"></ion-icon>
            </button>
            <button v-else @click="updateTodoStatus(todoData.id, TodoStatus.Completed)">
                <ion-icon name="checkmark-sharp"></ion-icon>
            </button>
            <button @click="deleteTodo(todoData.id)">
                <ion-icon name="trash-sharp"></ion-icon>
            </button>
        </div>
    </div>
</template>
<style scoped></style>