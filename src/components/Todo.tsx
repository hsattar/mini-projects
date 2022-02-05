import { ChangeEvent, useState } from 'react'

export default function Todo() {

    const [newToDo, setNewToDo] = useState({
        name: '',
        description: ''
    })

    const handleChange = (field: string, value: string) => {
        setNewToDo({
            ...newToDo,
            [field]: value
        })
    }

    return (
        <>
        <input placeholder='name' type="text" value={newToDo.name} onChange={e => handleChange('name', e.target.value )}></input>   
        <br />
        <br />
        <input placeholder='description' type="text" value={newToDo.name} onChange={e => handleChange('description', e.target.value )}></input>   
        </>
    )
}
