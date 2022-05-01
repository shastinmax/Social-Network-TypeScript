import {AppStateType} from "../redux-store";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}


export const selectIsAuth = (state: AppStateType) => state.auth
export const selectIsDialogs = (state: AppStateType) => state.dialogsPage
export const selectIsApp = (state: AppStateType) => state.app
export const selectIsProfile = (state: AppStateType) => state.profilePage
export const selectUser= (state: AppStateType) => state.usersPage
