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
    profile: null | ProfilePropsType
    status: string
}
export type DispatchType = (action: GlobalTypeAction) => void

const ADD_POST = 'ADD-POST';

export const addPostAC = (newPostBody: string): AddPostActionType => {
    return {
        type: ADD_POST,
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
export const getUserProfile = (userId: number) => (dispatch: DispatchType) => {
    usersApi.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const getStatus = (userId: number) => (dispatch: DispatchType) => {
    profileApi.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status: string) => (dispatch: DispatchType) => {
    profileApi.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }

        })
}

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
        case ADD_POST:
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
        default:
            return state
    }
}