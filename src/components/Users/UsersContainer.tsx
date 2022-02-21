import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleFollowingInProgressAC,
    toggleIsFetchingAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import React from "react";

import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {usersApi} from "../../api/api";


export type UsersPropsType = {
    followAC: (id: number) => void
    unfollowAC: (id: number) => void
    setUsersAC: (Users: UserType[]) => void
    setCurrentPageAC: (el: number) => void
    setUsersTotalCountAC: (totalCount: number) => void
    toggleIsFetchingAC: (isFetching: boolean) => void
    toggleFollowingInProgressAC: (isFetching: boolean, userId: number) => void

    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}


export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetchingAC(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetchingAC(false)
            this.props.setUsersAC(data.items)
            this.props.setUsersTotalCountAC(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {

        this.props.setCurrentPageAC(pageNumber)
        this.props.toggleIsFetchingAC(true)
        usersApi.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetchingAC(false)
            this.props.setUsersAC(data.items)
        })
    }


    render() {

        return <div>
            <>
                {this.props.isFetching && <Preloader/>}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       unfollow={this.props.unfollowAC}
                       follow={this.props.followAC}
                       toggleIsFollowingInProgress={this.props.toggleFollowingInProgressAC}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        </div>
    }
}

export const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    followAC,
    unfollowAC,
    setUsersAC,
    setCurrentPageAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC,
    toggleFollowingInProgressAC
})(UsersAPIComponent)