import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

interface IProps {
    element: IElement | undefined
    idx: number
}

interface IStyledProps {
    isDragging: boolean
}

const ElemContainer = styled.div<IStyledProps>`
    border: 1px solid lightgrey;
    border-radius: 2px;
    background-color: ${({ isDragging }) => isDragging ? 'lightgreen' : 'white'};
    padding: 8px;
    margin-bottom: 8px;
`

export default function Element({ element, idx }: IProps) {
    return (
        <Draggable draggableId={element?.id!} index={idx}>
            {(provided, snapshot) => (
            <ElemContainer
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
            >
                {element?.text}
            </ElemContainer>
            )}
        </Draggable>
    )
}
