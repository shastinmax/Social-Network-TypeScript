import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,getUsersTC,
    setCurrentPageAC,
    toggleIsFollowingInProgressAC,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/selectors/users-selectors";


export type MapDispatchToProps = {
    setCurrentPageAC: (el: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleIsFollowingInProgressAC: (isFetching: boolean, userId: number) => void
}

type MapStateToProps = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type UsersPropsType = MapStateToProps & MapDispatchToProps


class UsersAPIComponent extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsersTC(pageNumber, this.props.pageSize)
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
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        </div>
    }
}

// export const mapStateToProps = (state: AppStateType): MapStateToProps => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

export const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPageAC,
    toggleIsFollowingInProgressAC,
    getUsersTC
})(UsersAPIComponent)