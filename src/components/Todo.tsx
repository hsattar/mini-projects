import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoItem } from '../redux/actions'
import { IReduxStore } from '../types'
import TodoItem from './TodoItem'
import { ActionCreators } from 'redux-undo'

export default function Todo() {

    const dispatch = useDispatch()
    const todos = useSelector((state: IReduxStore) => state.todos.present.tasks)
    const { undo, redo } = ActionCreators

    const [newTodo, setNewTodo] = useState({
        name: '',
        description: ''
    })

    const handleChange = (field: string, value: string) => {
        setNewTodo({
            ...newTodo,
            [field]: value
        })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(addTodoItem(newTodo))
        setNewTodo({
            name: '',
            description: ''
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder='name' type="text" value={newTodo.name} onChange={e => handleChange('name', e.target.value )}></input>   
                <br /><br />
                <input placeholder='description' type="text" value={newTodo.description} onChange={e => handleChange('description', e.target.value )}></input>   
                <br /><br />
                <button type='submit'>Add</button>
                <button onClick={() => dispatch(undo())}>Undo</button>
                <button onClick={() => dispatch(redo())}>Redo</button>
            </form>
            { todos.map((todo, idx) => <TodoItem key={idx} {...todo} index={idx} />) }
        </>
    )
}