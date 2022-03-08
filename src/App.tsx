import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import initialdata from './data'
import Container from './Container'

export default function App() {

  const [data, setData] = useState(initialdata) 

  const handleOnDragEnd = (result: any) => {
    const { source, destination, draggableId } = result

    if (!destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    const container = data.containers.find(contain => contain.id === source.droppableId)
    const newElementIds = [...container?.elementIds!]
    newElementIds.splice(source.index, 1)
    newElementIds.splice(destination.index, 0, draggableId)

    const newContainer = {
      ...container,
      elementIds: newElementIds
    }

    const containerIndex = data.containers.findIndex(contain => contain.id === source.droppableId)

    data.containers[containerIndex] = newContainer

    setData({
      ...data,
      containers: data.containers
    })

  }

  return (
    <DragDropContext
      onDragEnd={handleOnDragEnd}
    >
    { data.containerOrder.map(containerId => {
      const container = data.containers.find(contain => contain.id === containerId)
      const elements = container?.elementIds.map(elem1 => data.elements.find(elem => elem.id === elem1) )
      return <Container key={container?.id} container={container} elements={elements} />
    }) }
    </DragDropContext>
  )
}