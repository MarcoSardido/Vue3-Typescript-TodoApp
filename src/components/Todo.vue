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
    <div class="todo-item" :class="todoData.isDone ? 'done' : ''">
        <div class="todo-title" v-if="todoData.isDone"><del>{{ todoData.title }}</del></div>
        <div class="todo-title" v-else>{{ todoData.title }}</div>
        <div class="button-group">
            <button v-if="todoData.isDone" @click="updateTodoStatus(todoData.id, TodoStatus.Pending)" class="btn-close">
                <ion-icon name="close-sharp"></ion-icon>
            </button>
            <button v-else @click="updateTodoStatus(todoData.id, TodoStatus.Completed)" class="btn-check">
                <ion-icon name="checkmark-sharp"></ion-icon>
            </button>
            <button @click="deleteTodo(todoData.id)" class="btn-delete">
                <ion-icon name="trash-sharp"></ion-icon>
            </button>
        </div>
    </div>
</template>
<style scoped>
.todo-item {
    background: #fff;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 5px 0px;
    width: 22rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    margin-bottom: 10px;
    text-transform: capitalize;
    font-size: 18px;
}

.todo-item.done {
    background: #7afccc30;
}

.button-group {
    display: flex;
    justify-content: space-between;
    width: 4rem;
}

button {
    padding: 4px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    background: transparent;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 5px 0px;
}

.btn-close {
    color: #f86905;
}

.btn-close:hover {
    color: #fff;
    background: #f86905;
}

.btn-check {
    color: #5bc068;
}

.btn-check:hover {
    color: #fff;
    background: #5bc068;
}

.btn-delete {
    color: #e62136;
}

.btn-delete:hover {
    color: #fff;
    background: #e62136;
}
</style>