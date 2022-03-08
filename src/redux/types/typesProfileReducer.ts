import {addPostAC, setStatus, setUserProfile, updateNewPostTextAC} from "../profile-reducer";


type AddPostACType = ReturnType<typeof addPostAC>
type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
type SetUserProfileACType = ReturnType<typeof setUserProfile>
export type SetUserStatusType = ReturnType<typeof setStatus>
export type GlobalTypeAction = AddPostACType
    | UpdateNewPostTextACType
    | SetUserProfileACType
    | SetUserStatusType