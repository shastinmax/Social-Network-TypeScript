import {AppStateType} from "../../redux-store";
import {UserType} from "../../users-reducer";

export const selectUser = (state: AppStateType): UserType[]=> state.usersPage.users
export const selectFollowingInProgress = (state: AppStateType): number[] => state.usersPage.followingInProgress
export const selectCurrentPage = (state: AppStateType): number=> state.usersPage.currentPage
export const selectTotalUsersCount = (state: AppStateType):number => state.usersPage.totalUsersCount
export const selectPageSize = (state: AppStateType):number =>  state.usersPage.pageSize
export const selectIsFetching = (state: AppStateType):boolean =>  state.usersPage.isFetching
export const selectTotalUserCount = (state: AppStateType):number =>state.usersPage.totalUsersCount


