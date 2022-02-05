import { AnyAction } from "redux";
import { IReduxStore } from "../types";
import { INCREASE_COUNTER, DECREASE_COUNTER, ADD_TODO_ITEM } from "./actions";
import { initialState } from "./store";

export const counterReducer = (state: any = initialState.counter, action: AnyAction) => {    
    switch (action.type) {
        case INCREASE_COUNTER: return {
            ...state,
                count: state.count + 1
        }
        case DECREASE_COUNTER: return {
            ...state,
                count: state.count - 1
        }
        default: return state
    }
}

export const todoReducer = (state: any = initialState.todos, action: AnyAction) => {
    switch (action.type) {
        case ADD_TODO_ITEM: return {
            ...state,
            tasks: [...state.tasks, action.payload]
        }
        default: return state
    }
}