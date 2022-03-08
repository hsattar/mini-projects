import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

interface IProps {
    element: IElement | undefined
    idx: number
}

const ElemContainer = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    background-color: white;
    padding: 8px;
    margin-bottom: 8px;
`

export default function Element({ element, idx }: IProps) {
    return (
        <Draggable draggableId={element?.id!} index={idx}>
            {(provided) => (
            <ElemContainer
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
            >
                {element?.text}
            </ElemContainer>
            )}
        </Draggable>
    )
}
