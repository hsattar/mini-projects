import { useDispatch, useSelector } from "react-redux"
import { decreaseCounterAction, increaseCounterAction } from "../redux/actions"
import { IReduxStore } from "../types"
import { ActionCreators } from "redux-undo"


export default function Counter() {

    const dispatch = useDispatch()
    const count = useSelector((state: IReduxStore) => state.counter.present.count)
    const { undo, redo, clearHistory } = ActionCreators
    
    return (
        <>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increaseCounterAction())}>Increment</button>
        <button onClick={() => dispatch(decreaseCounterAction())}>Decrement</button>
        <button onClick={() => dispatch(undo())}>Undo</button>
        <button onClick={() => dispatch(redo())}>Redo</button>
        <button onClick={() => dispatch(clearHistory())}>Clear</button>
        </>
    )
}
