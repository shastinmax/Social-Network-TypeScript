import {authApi} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: GeneralType): InitialStateType => {
    switch (action.type) {
        case "auth/SET-USER-DATA": {
            return {...state, ...action.payload}
        }
        default: {
            return state
        }
    }
}
export type GeneralType = SetUserDataType
type SetUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'auth/SET-USER-DATA',
        payload: {
            id, email, login, isAuth
        }
    }
}
export const getAuthUserData = () => async (dispatch: Dispatch) => {
   let response = await authApi.getMe()
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => async(dispatch: Dispatch) => {
   let response = await authApi.login(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData() as any)
            }else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}));
            }
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    let response = await authApi.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
}

