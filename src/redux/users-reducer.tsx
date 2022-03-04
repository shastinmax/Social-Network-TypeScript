import {GlobalReducerType} from "./types/typesUserReducers";
import {usersApi} from "../api/api";

export type UserType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    // location: {
    //     city: string
    //     country: string
    // }
}
export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]

}
let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 3,
    isFetching: true,
    followingInProgress: []
}
export const usersReducer = (state: UsersType = initialState, action: GlobalReducerType): UsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)}
        case "SET-USER":
            return {...state, users: action.payload.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.payload.currentPage}
        case "SET-USERS-TOTAL-COUNT":
            return {...state, totalUsersCount: action.payload.totalCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
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
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}
export const unfollowSuccess = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USER',
        payload: {
            users
        }
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage
        }
    } as const
}
export const setUsersTotalCountAC = (totalCount: number) => {
    return {
        type: 'SET-USERS-TOTAL-COUNT',
        payload: {
            totalCount
        }
    } as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {isFetching}
    } as const
}
export const toggleIsFollowingInProgressAC = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        payload: {
            isFetching,
            userId
        }
    } as const
}
export type DispatchType = (action: GlobalReducerType) => void
//Thunks
export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: DispatchType) => {
        dispatch(toggleIsFetchingAC(true))
        usersApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setUsersTotalCountAC(data.totalCount))
        })
    }
}
export const follow = (userId: number) => {
    debugger
    return (dispatch: DispatchType) => {
        dispatch(toggleIsFollowingInProgressAC(true, userId))
        usersApi.follow(userId)
            .then(response => {
                if (response.data.resultCode) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowingInProgressAC(false, userId))
            })
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: DispatchType) => {
        dispatch(toggleIsFollowingInProgressAC(true, userId))
debugger
        usersApi.unfollow(userId)
            .then(response => {
                if (response.data.resultCode) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowingInProgressAC(false, userId))
            })
    }
}
