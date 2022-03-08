const initialdata: IData = {
    elements: [
        {
            id: 'h1',
            text: 'heading'
        },
        {
            id: 'p',
            text: 'paragraph'
        },
        {
            id: 'img',
            text: 'image'
        }
    ],
    containers: [
        {
            id: 'root',
            title: 'root',
            elementIds: ['h1', 'p', 'img']
        },
        {
            id: 'grid-1',
            title: 'grid 1',
            elementIds: []
        },
        {
            id: 'grid-2',
            title: 'grid 2',
            elementIds: []
        }
    ],
    containerOrder: ['root', 'grid-1', 'grid-2']
}

export default initialdata