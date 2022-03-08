interface IData {
    elements: IElement[],
    containers: IContainer[],
    containerOrder: string[]
}

interface IContainer {
    id?: string 
    title?: string
    elementIds: string[]
}

interface IElement {
    id: string 
    text: string
}

interface IDragStart {
    draggableId: string
    type: string
    source: IResultSrcDest | null
}

interface IDragUpdate extends IDragStart {
    destination: IResultSrcDest | null
}

interface IDragEndResult extends IDragUpdate{
    reason: 'DROP' | 'CANCELLED'
}

interface IResultSrcDest {
    droppableId: string
    index: number
}

interface IDragSnapshot {
    isDragging: boolean
    draggingOver: string | null
}

interface IDropSnapshot {
    isDraggingOver: boolean
    draggingOverWidth: string | null
}