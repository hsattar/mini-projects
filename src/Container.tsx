import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import Element from './Element'

interface IProps {
    container: IContainer | undefined
    elements: (IElement | undefined)[] | undefined
}

interface IStyledProps {
    isDraggingOver: boolean
}

const ContainerDiv = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`
const Title = styled.h3`
    padding: 8px;
`

const ElementList = styled.div<IStyledProps>`
    padding: 8px;
    background-color: ${({ isDraggingOver }) => isDraggingOver ? 'skyblue' : 'white'}
`

export default function Container({ container, elements }: IProps) {
    return (
        <ContainerDiv>
            <Title>{container?.title}</Title>
            <Droppable droppableId={container?.id!}>
                {(provided, snapshot) => (
                <ElementList
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    isDraggingOver={snapshot.isDraggingOver}
                >
                    {elements?.map((elem, idx) => <Element key={elem?.id} element={elem} idx={idx} />)}
                    {provided.placeholder}
                </ElementList>
                )}
            </Droppable>
        </ContainerDiv>
    )
}
