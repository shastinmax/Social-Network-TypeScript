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
    pageSize:number
    totalUsersCount:number
}
let initialState: UsersType = {
    users: [],
    pageSize:5,
    totalUsersCount:0
}
export const usersReducer = (state: UsersType = initialState, action: GlobalReducerType): UsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)}
        case "SET-USER":
            return {...state, users: [...state.users, ...action.payload.users]}
        default:
            return state
    }
}
type GlobalReducerType = FollowACType
    | UnfollowACType
    | SetUsersACType
// type UsersACType=ReturnType<typeof UsersAC>
// export const UsersAC=()=>{
//     return{
//         type:'USERS'
//     }as const
//
// }

type FollowACType = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}
type UnfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USER',
        payload: {
            users
        }
    } as const
}