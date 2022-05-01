import React from 'react';
import {UserType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: number[]
}

export const Users = ({onPageChanged, users, totalUsersCount, pageSize, currentPage, ...props}: UsersPropsType) => {

    return (
        <div>
            <Paginator onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}
                       currentPage={currentPage}/>
            <div>
                {users.map(u =>
                    <User key={u.id} user={u} followingInProgress={props.followingInProgress}/>)
                }
            </div>
        </div>
    );
};




