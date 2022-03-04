import {ProfilePropsType} from "../components/Profile/ProfileContainer";
import {GlobalTypeAction} from "./types/typesProfileReducer";
import {usersApi} from "../api/api";

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    text: string
}
export type RouteType = {
    likesCount: number
    message: string
    id: number
}
export type ProfileType = {
    posts: Array<RouteType>
    newPostText: string,
    profile:null | ProfilePropsType
}
type NewPostType = {
    id: number
    message: string
    likesCount: number
}
export type DispatchType = (action:GlobalTypeAction ) => void

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


export const addPostAC = (): AddPostActionType => {
    return {
        type: ADD_POST
    }as const
}

export const updateNewPostTextAC = (newText: string): UpdateNewPostTextActionType =>{
    return{
        type: UPDATE_NEW_POST_TEXT,
        text: newText
    } as const
}

export const setUserProfile = (profile:ProfilePropsType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile,
    }as const
}
export const getUserProfile = (userId:number) =>(dispatch:DispatchType)=> {
    usersApi.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
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
    profile: null
}

export const profileReducer = (state: ProfileType = initialState, action: GlobalTypeAction): ProfileType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0,
                }],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.text}
        case "SET-USER-PROFILE":
            return {
                ...state,profile:action.profile
        }
        default:
            return state
    }
}