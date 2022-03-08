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

    const start = data.containers.find(contain => contain.id === source.droppableId)
    const finish = data.containers.find(contain => contain.id === destination.droppableId)
    const startContainerIndex = data.containers.findIndex(contain => contain.id === source.droppableId)

    if (start === finish) {
      const newElementIds = [...start?.elementIds!]
      newElementIds.splice(source.index, 1)
      newElementIds.splice(destination.index, 0, draggableId)
  
      const newContainer = {
        ...start,
        elementIds: newElementIds
      }
    
      data.containers[startContainerIndex] = newContainer
  
      setData({
        ...data,
        containers: data.containers
      })
      return
    }

    const startElementIds = [...start?.elementIds!]
    startElementIds.splice(source.index, 1)
    const finishElementIds = [...finish?.elementIds!]
    finishElementIds.splice(destination.index, 0, draggableId)
    const finishContainerIndex = data.containers.findIndex(contain => contain.id === destination.droppableId)

    const newStartContainer = {
      ...start,
      elementIds: startElementIds
    }

    const newFinishContainer = {
      ...finish,
      elementIds: finishElementIds
    }

    data.containers[startContainerIndex] = newStartContainer
    data.containers[finishContainerIndex] = newFinishContainer

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