import { ITodoTask } from '../types'

export const INCREASE_COUNTER: string = 'INCREASE_COUNTER'
export const DECREASE_COUNTER: string = 'DECREASE_COUNTER'
export const ADD_TODO_ITEM: string = 'ADD_TODO_ITEM'

export const increaseCounterAction = () => ({ type: INCREASE_COUNTER })
export const decreaseCounterAction = () => ({ type: DECREASE_COUNTER })

export const addTodoItem = (task: ITodoTask) => ({
    type: ADD_TODO_ITEM,
    payload: task
})