import {ProfilePropsType} from "../components/Profile/ProfileContainer";
import {GlobalTypeAction} from "./types/typesProfileReducer";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";
import {v1} from "uuid";
import {profileApi} from "../api/profile";
import {usersApi} from "../api/users";

export type AddPostActionType = {
    type: 'ADD-POST',
    newPostBody: string
}
export type RouteType = {
    likesCount: number
    message: string
    id: string
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
        {id: v1(), message: 'Hi,how are you', likesCount: 0},
        {id: v1(), message: 'Hi, you', likesCount: 0},
        {id: v1(), message: 'Hi,how are you', likesCount: 1},
        {id: v1(), message: 'how are you', likesCount: 0}
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
                    id: v1(),
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
                ...state, posts: state.posts.filter(p => p.id !== action.payload.postId)
            }
        case "SAVE-PHOTO-SUCCESS":
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        case "UPDATE-LIKES-COUNTER":
            return {
                ...state,
                posts: state.posts.map(el => el.id === action.payload.id ? {
                    ...el,
                    likesCount: action.payload.likesCounter
                } : el)
            }
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
export const deletePostAC = (postId: string) => {
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
export const updateLikesCounter = (id: string, likesCounter: number) => {
    return {
        type: 'UPDATE-LIKES-COUNTER',
        payload: {
            id, likesCounter
        }
    } as const
}
export const removePost = (id: string,) => {
    return {
        type: 'REMOVE-POST',
        payload: {
            id,
        }
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
    let response = await profileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file: any) => async (dispatch: DispatchType) => {
    let response = await profileApi.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: ProfilePropsType) => async (dispatch: DispatchType, getState: () => AppStateType) => {
    const userId = getState().auth.id
    let response = await profileApi.saveProfile(profile)
    if (response.data.resultCode === 0) {
        //@ts-ignore
        dispatch(getUserProfile(userId))
    } else {
        // @ts-ignore
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0])
    }
}

