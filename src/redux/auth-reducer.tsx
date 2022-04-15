import {authApi, securityAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}
export type GeneralType = SetUserDataType | GetCaptchaUrlType
// export type ThunkType = ThunkAction<void, AppStateType, Dispatch<GeneralType>, GeneralType>
type SetUserDataType = ReturnType<typeof setAuthUserData>
type GetCaptchaUrlType = ReturnType<typeof getCaptchaUrl>
export const authReducer = (state: InitialStateType = initialState, action: GeneralType): InitialStateType => {
    switch (action.type) {
        case "auth/SET-USER-DATA":
        case "GET-CAPTCHA-URL": {
            return {...state, ...action.payload}
        }

        default: {
            return state
        }
    }
}


///////////////////Actions//////////////////////////

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean,) => {
    return {
        type: 'auth/SET-USER-DATA',
        payload: {
            id, email, login, isAuth,
        }
    }as const
}
export const getCaptchaUrl = (captchaUrl: string | null) => {
    return {
        type: 'GET-CAPTCHA-URL',
        payload:{captchaUrl}
    }as const
}

/////////////////Thunks//////////////////////////////


export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authApi.getMe()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean,captcha:any) => async (dispatch: Dispatch) => {
    let response = await authApi.login(email, password, rememberMe,captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData() as any)

    } else {
        if (response.data.resultCode === 10) {

            // @ts-ignore
            dispatch(captchaUrlTC())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}
export const captchaUrlTC = () => async (dispatch: Dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrl(captchaUrl))
}
export const logoutTC = () => async (dispatch: Dispatch) => {
    let response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

