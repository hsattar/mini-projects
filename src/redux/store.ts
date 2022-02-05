import { combineReducers, createStore } from "redux"
import { IReduxStore } from "../types"
import { counterReducer } from "./reducer"

export const initialState: IReduxStore = {
    counter: {
        count: 0
    }
}   

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, (initialState as any), (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ())