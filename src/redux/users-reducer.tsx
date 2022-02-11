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

}
let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 3,
    isFetching: true
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
        default:
            return state
    }
}
type GlobalReducerType = FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetCurrentPageAC
    | SetUsersTotalCountACType
    | ToggleIsFetchingACType

type FollowACType = ReturnType<typeof follow>
export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}
type UnfollowACType = ReturnType<typeof unfollow>
export const unfollow = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

type SetUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USER',
        payload: {
            users
        }
    } as const
}
type SetCurrentPageAC = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage
        }
    } as const
}
type SetUsersTotalCountACType = ReturnType<typeof setUsersTotalCount>
export const setUsersTotalCount = (totalCount: number) => {
    return {
        type: 'SET-USERS-TOTAL-COUNT',
        payload: {
            totalCount
        }
    } as const
}
type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {isFetching}
    } as const
}