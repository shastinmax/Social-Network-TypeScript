import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/risuem-chelovek-rebenku-14.jpg";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    user: UserType
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: number[]
}

export const User = ({user, follow, unfollow, followingInProgress,}: UsersPropsType) => {
    return (
        <div>
            <div>
                <span>
                <div>
                <NavLink to={'/profile/' + user.id}>
                    <img className={s.userPhoto} src={user.photos.small !== null ? user.photos.small : userPhoto}
                         alt='avatar'/>
                </NavLink>
                </div>
                <div>
            {
                user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}>Follow</button>
            }
                </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>
        </div>
    );
};




