export interface IReduxStore {
    counter: {
        past: [],
        present: { count: number},
        future: []
    }
}