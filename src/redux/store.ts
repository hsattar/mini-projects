import { combineReducers, createStore } from "redux"
import { IReduxStore } from "../types"
import { counterReducer } from "./reducer"

const initialState: IReduxStore = {
    counter: {
        count: 0
    }
}   

const rootReducer = combineReducers({
    counter: counterReducer
})

const store = createStore(rootReducer, (initialState as any))