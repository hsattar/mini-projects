import { AnyAction } from "redux";
import { IReduxStore } from "../types";
import { INCREASE_COUNTER, DECREASE_COUNTER } from "./actions";
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

export const todoReducer = (state = initialState.todos, action: AnyAction) => {
    switch (action.type) {
        default: return state
    }
}