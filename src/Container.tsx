import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import Element from './Element'

interface IProps {
    container: IContainer | undefined
    elements: (IElement | undefined)[] | undefined
}

const ContainerDiv = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`
const Title = styled.h3`
    padding: 8px;
`

const ElementList = styled.div`
    padding: 8px;
`

export default function Container({ container, elements }: IProps) {
    return (
        <ContainerDiv>
            <Title>{container?.title}</Title>
            <Droppable droppableId={container?.id!}>
                {(provided) => (
                <ElementList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {elements?.map((elem, idx) => <Element key={elem?.id} element={elem} idx={idx} />)}
                    {provided.placeholder}
                </ElementList>
                )}
            </Droppable>
        </ContainerDiv>
    )
}
