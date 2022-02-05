import { useDispatch, useSelector } from "react-redux"
import { decreaseCounterAction, increaseCounterAction } from "./redux/actions"
import { IReduxStore } from "./types"

export default function App() {
  
  const dispatch = useDispatch()
  const count = useSelector((state: IReduxStore) => state.counter.count)
  
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increaseCounterAction())}>Increment</button>
      <button onClick={() => dispatch(decreaseCounterAction())}>Decrement</button>
    </>
  )
}
