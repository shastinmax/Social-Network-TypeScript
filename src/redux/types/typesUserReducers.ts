import {
    followSuccess,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC, toggleIsFollowingInProgressAC,
    toggleIsFetchingAC,
    unfollowSuccess
} from "../users-reducer";

type FollowACType = ReturnType<typeof followSuccess>
type UnfollowACType = ReturnType<typeof unfollowSuccess>
type SetUsersACType = ReturnType<typeof setUsersAC>
type SetCurrentPageAC = ReturnType<typeof setCurrentPageAC>
type SetUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>
type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
type ToggleIsFollowingACType = ReturnType<typeof toggleIsFollowingInProgressAC>

export type GlobalReducerType = FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetCurrentPageAC
    | SetUsersTotalCountACType
    | ToggleIsFetchingACType
    | ToggleIsFollowingACType

