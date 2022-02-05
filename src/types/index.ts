export interface IReduxStore {
    counter: {
        past: [],
        present: { count: number},
        future: []
    },
    todos: {
        past: [],
        present: {
            tasks: ITodoTask[]
        },
        future: []
    }
}

export interface ITodoTask {
    name: string
    description: string
}