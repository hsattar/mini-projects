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