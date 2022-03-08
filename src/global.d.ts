interface IData {
    elements: IElement[],
    containers: IContainer[],
    containerOrder: string[]
}

interface IContainer {
    id: string
    title: string
    elementIds: string[]
}

interface IElement {
    id: string
    text: string
}

interface IDragEndResult {
    draggableId: string
    type: string
    reason: 'DROP' | 'CANCELLED'
    source: IResultSrcDest
    destination: IResultSrcDest
}

interface IResultSrcDest {
    droppableId: string
    index: number
}