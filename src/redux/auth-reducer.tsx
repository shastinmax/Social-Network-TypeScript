import {authApi} from "../api/api";
import {Dispatch} from "redux";

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
        case "SET-USER-DATA": {
            return {...state, ...action.payload, isAuth: true}
        }
        default: {
            return state
        }
    }
}
export type GeneralType = SetUserDataType
export type DispatchType = (action:GeneralType ) => void
type SetUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number | null, email: string |null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            id, email, login, isAuth
        }
    }
}
export const getAuthUserData =()=> (dispatch:DispatchType) => {
    console.log('getAuthUserData')
    authApi.getMe()
        .then(response => {
            console.log(response)
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                console.log(login)
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const loginTC =(email: string, password: string, rememberMe: boolean)=> (dispatch:DispatchType) => {
    authApi.login(email, password, rememberMe)
        .then(response => {
            console.log(response)
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData()as any)
            }
        })
}

export const logoutTC =()=> (dispatch:DispatchType) => {
    authApi.logout()
        .then(response => {
            console.log(response)
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

