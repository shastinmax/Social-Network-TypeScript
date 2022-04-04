import {GlobalReducerType} from "./types/typesUserReducers";
import {usersApi} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

export type UserType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
}
export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]

}
export type DispatchType = (action: GlobalReducerType) => void

let initialState: UsersType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}
export const usersReducer = (state: UsersType = initialState, action: GlobalReducerType): UsersType => {
    switch (action.type) {
        case 'users/FOLLOW':
            return {...state, users: updateObjectInArray(state.users,action.payload.userId, {followed: true})
            }
        case "users/UNFOLLOW":
            return {...state, users: updateObjectInArray(state.users,action.payload.userId, {followed: false})
                }
        case "users/SET-USER":
            return {...state, users: action.payload.users}
        case "users/SET-CURRENT-PAGE":
            return {...state, currentPage: action.payload.currentPage}
        case "users/SET-USERS-TOTAL-COUNT":
            return {...state, totalUsersCount: action.payload.totalCount}
        case "users/TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        case "users/TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id != action.payload.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId: number) => {
    return {
        type: 'users/FOLLOW',
        payload: {
            userId
        }
    } as const
}
export const unfollowSuccess = (userId: number) => {
    return {
        type: 'users/UNFOLLOW',
        payload: {
            userId
        }
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'users/SET-USER',
        payload: {
            users
        }
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'users/SET-CURRENT-PAGE',
        payload: {
            currentPage
        }
    } as const
}
export const setUsersTotalCountAC = (totalCount: number) => {
    return {
        type: 'users/SET-USERS-TOTAL-COUNT',
        payload: {
            totalCount
        }
    } as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'users/TOGGLE-IS-FETCHING',
        payload: {isFetching}
    } as const
}
export const toggleIsFollowingInProgressAC = (isFetching: boolean, userId: number) => {
    return {
        type: 'users/TOGGLE-IS-FOLLOWING-PROGRESS',
        payload: {
            isFetching,
            userId
        }
    } as const
}

const followUnfollowFlow = async (dispatch:DispatchType,userId:number,apiMethod:any,actionCreator:any) => {
    dispatch(toggleIsFollowingInProgressAC(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        console.log('if')
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingInProgressAC(false, userId))
}

//Thunks
export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: DispatchType) => {
    dispatch(toggleIsFetchingAC(true))
    dispatch(setCurrentPageAC(currentPage))
    let data = await usersApi.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetchingAC(false))
    dispatch(setUsersAC(data.items))
    dispatch(setUsersTotalCountAC(data.totalCount))
}
export const follow = (userId: number) => async (dispatch: DispatchType) => {
    followUnfollowFlow(dispatch,userId,usersApi.follow.bind(usersApi),followSuccess)

}
export const unfollow = (userId: number) =>
    async (dispatch: DispatchType) => {
        followUnfollowFlow(dispatch,userId,usersApi.unfollow.bind(usersApi),unfollowSuccess)
    }

