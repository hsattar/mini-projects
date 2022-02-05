export interface IReduxStore {
    counter: {
        past: [],
        present: { count: number},
        future: []
    },
    todos: {
        past: [],
        present: [],
        future: []
    }
}