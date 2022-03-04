import {addPostAC, setUserProfile, updateNewPostTextAC} from "../profile-reducer";


type AddPostACType = ReturnType<typeof addPostAC>
type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
type SetUserProfileACType = ReturnType<typeof setUserProfile>
export type GlobalTypeAction = AddPostACType
    | UpdateNewPostTextACType
    | SetUserProfileACType