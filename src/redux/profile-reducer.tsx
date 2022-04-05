import {ProfilePropsType} from "../components/Profile/ProfileContainer";
import {GlobalTypeAction} from "./types/typesProfileReducer";
import {profileApi, usersApi} from "../api/api";

export type AddPostActionType = {
    type: 'ADD-POST',
    newPostBody: string
}
export type RouteType = {
    likesCount: number
    message: string
    id: number
}
export type ProfileType = {
    posts: Array<RouteType>
    newPostText: string,
    profile: null | any
    status: string
}
export type DispatchType = (action: GlobalTypeAction) => void

let initialState: ProfileType = {
    posts: [
        {id: 1, message: 'Hi,how are you', likesCount: 12},
        {id: 2, message: 'Hi, you', likesCount: 11},
        {id: 3, message: 'Hi,how are you', likesCount: 11},
        {id: 4, message: 'how are you', likesCount: 12}
    ],
    newPostText: 'it-kamas',
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfileType = initialState, action: GlobalTypeAction): ProfileType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: action.newPostBody,
                    likesCount: 0,
                }],
                newPostText: ''
            }
        case "SET-USER-PROFILE":
            return {
                ...state, profile: action.profile
            }
        case "SET-STATUS":
            return {
                ...state, status: action.payload.status
            }
        case "DELETE-POST":
            return {
                ...state,posts:state.posts.filter(p => p.id !== action.payload.postId)}
        case "SAVE-PHOTO-SUCCESS":
            return {
                ...state,profile:{...state.profile, photos: action.photos}}
        default:
            return state
    }
}

export const addPostAC = (newPostBody: string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        newPostBody
    } as const
}
export const setUserProfile = (profile: ProfilePropsType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile,
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        payload: {
            status
        }
    } as const
}
export const deletePostAC = (postId: number) => {
    return {
        type: 'DELETE-POST',
        payload: {
            postId
        }
    } as const
}
export const savePhotoSuccess = (photos: any) => {
    return {
        type: 'SAVE-PHOTO-SUCCESS',
        photos
    } as const
}

export const getUserProfile = (userId: number) => async (dispatch: DispatchType) => {
    let response = await usersApi.getProfile(userId)
        dispatch(setUserProfile(response.data))
}
export const getStatus = (userId: number) => async (dispatch: DispatchType) => {
let response = await profileApi.getStatus(userId)
            dispatch(setStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: DispatchType) => {
    let response =await profileApi.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
}
export const savePhoto = (file: any) => async (dispatch: DispatchType) => {
    let response =await profileApi.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

