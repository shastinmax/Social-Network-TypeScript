import React from 'react';
import {UserType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";
import s from "./users.module.css";

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

            <div>
                <Paginator onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}
                           currentPage={currentPage}/>
            </div>
            <div className={s.users}>
                {users.map(u =>
                    <User key={u.id} user={u} followingInProgress={props.followingInProgress}/>)
                }
            </div>
        </div>
    );
};




