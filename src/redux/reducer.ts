import { AnyAction } from "redux";
import { IReduxStore } from "../types";

export const counterReducer = (state: IReduxStore, action: AnyAction) => {
    switch (action.type) {
        default: return state
    }
}