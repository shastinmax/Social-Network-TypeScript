import {GeneralType} from "../../actionCreators/app/types";
import {InitialStateType} from "./types";

let initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: GeneralType): InitialStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS": {
            return {
                ...state,
                initialized: true
            }
        }
        default: {
            return state
        }
    }
}






