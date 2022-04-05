import {addPostAC, deletePostAC, savePhotoSuccess, setStatus, setUserProfile} from "../profile-reducer";

type AddPostACType = ReturnType<typeof addPostAC>
type SetUserProfileACType = ReturnType<typeof setUserProfile>
export type SetUserStatusType = ReturnType<typeof setStatus>
export type GlobalTypeAction = AddPostACType
    | SetUserProfileACType
    | SetUserStatusType
    | ReturnType<typeof deletePostAC>
| ReturnType<typeof savePhotoSuccess>