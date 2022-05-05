import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/risuem-chelovek-rebenku-14.jpg";
import {follow, unfollow, UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

type UsersPropsType = {
    user: UserType
    followingInProgress: number[]
}

export const User = ({user, followingInProgress,}: UsersPropsType) => {
    const dispatch = useDispatch()
    const onHandlerFollow = (id: number) => {
        dispatch(follow(id))
    }
    const onHandlerUnFollow = (id: number) => {
        dispatch(unfollow(id))
    }


    return (
        <div className={s.user}>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={s.userPhoto} src={user.photos.small !== null ? user.photos.small : userPhoto}
                             alt='avatar'/>
                    </NavLink>
                </div>
                <div>
                    {
                        user.followed
                            ? <button className={s.follow} disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          onHandlerUnFollow(user.id)
                                      }}>Unfollow</button>
                            : <button className={s.follow} disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          onHandlerFollow(user.id)
                                      }}>Follow</button>
                    }
                </div>
            </div>
            <div >{user.name}</div>
        </div>
    );
};




