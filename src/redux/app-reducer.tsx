import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

export type InitialStateType = {
    initialized: boolean
}

let initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: GeneralType): InitialStateType => {
    switch (action.type) {
        case "SET-INITIALIZED": {
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
export type GeneralType = SetUserDataType
type SetUserDataType = ReturnType<typeof initializeSuccess>
export const initializeSuccess = () => {
    return {
        type: 'INITIALIZED-SUCCESS',

    }
}
export const initializeApp = () => (dispatch: any) => {
    dispatch(getAuthUserData())
        .then(() => {
            dispatch(initializeSuccess())
        })
}


