import { combineReducers, createStore } from "redux"
import { IReduxStore } from "../types"
import { counterReducer, todoReducer } from "./reducer"
import undoable from "redux-undo"

export const initialState: IReduxStore = {
    counter: {
        past: [],
        present: { 
            count: 0
        },
        future: []
    },
    todos: {
        past: [],
        present: {
            tasks: []
        },
        future: []
    }
}   

const rootReducer = combineReducers({
    counter: undoable(counterReducer),
    todos: undoable(todoReducer)
})

export const store = createStore(rootReducer, (initialState as any), (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ())