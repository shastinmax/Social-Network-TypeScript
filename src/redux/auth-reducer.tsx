import {authApi} from "../api/api";

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
            return {...state, ...action.data, isAuth: true}
        }
        default: {
            return state
        }
    }
}
export type GeneralType = SetUserDataType
export type DispatchType = (action:GeneralType ) => void
type SetUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        data: {
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