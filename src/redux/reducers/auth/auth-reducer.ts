import { GeneralType } from "../../actionCreators/auth/types";
import {InitialStateType} from "./types";

let initialState = {
    id: undefined,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state: InitialStateType = initialState, action: GeneralType): InitialStateType => {
    switch (action.type) {
        case "AUTH/SET-USER-DATA":
        case "GET-CAPTCHA-URL": {
            return {...state, ...action.payload}
        }
        default: {
            return state
        }
    }
}