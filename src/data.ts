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
        }
    
    ],
    containerOrder: ['root']
}

export default initialdata