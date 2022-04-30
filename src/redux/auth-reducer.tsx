import {authApi, securityAPI} from "../api/api";
import {Dispatch} from "redux";
import {FormAction, stopSubmit} from "redux-form";
import {ThunkDispatch} from "redux-thunk";
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
type SetUserDataType = ReturnType<typeof setAuthUserData>
type GetCaptchaUrlType = ReturnType<typeof getCaptchaUrlSuccess>
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
    } as const
}
export const getCaptchaUrlSuccess = (captchaUrl: string | null) => {
    return {
        type: 'GET-CAPTCHA-URL',
        payload: {captchaUrl}
    } as const
}

/////////////////Thunks//////////////////////////////


export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authApi.getMe()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => {
    return async (dispatch: ThunkDispatch<AppStateType, unknown, FormAction>) => {
        try {
            const response = await authApi.login(email, password, rememberMe, captcha);
            if (response.data.resultCode === 0) {
                await dispatch(getAuthUserData());
            } else {
                if (response.data.resultCode === 10) {
                    await dispatch(getCaptchaUrl());
                } else {
                    const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error. Please reload page";
                    dispatch(stopSubmit("login", {_error: message}));
                }
            }
        } catch (error) {
            console.log(`Error login. ${error}`);
        }
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch: ThunkDispatch<AppStateType, unknown, GeneralType>) => {
        try {
            const response = await securityAPI.getCaptchaUrl();
            const captchaUrl = response.data.url;
            dispatch(getCaptchaUrlSuccess(captchaUrl));
        } catch (error) {
            console.log(`Error getting captcha image url. ${error}`);
        }
    }
}
export const logoutTC = () => async (dispatch: Dispatch) => {
    let response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

