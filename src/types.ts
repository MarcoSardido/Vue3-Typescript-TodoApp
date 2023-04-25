export enum TodoStatus {
    Pending = 'pending',
    Completed = 'completed'
}

export type TodoType = {
    id: string
    title: string
    isDone: boolean
}