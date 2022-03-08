import { useState } from 'react'
import initialdata from './data'
import Container from './Container'

export default function App() {

  const [data, setData] = useState(initialdata) 

  return (
    <>
    { data.containerOrder.map(containerId => {
      const container = data.containers.find(contain => contain.id === containerId)
      const elements = container?.elementIds.map(elem1 => data.elements.find(elem => elem.id === elem1) )
      return <Container key={container?.id} container={container} elements={elements} />
    }) }
    </>
  )
}