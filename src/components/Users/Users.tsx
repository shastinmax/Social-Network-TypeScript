import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/risuem-chelovek-rebenku-14.jpg";
import {UserType} from "../../redux/users-reducer";


type UsersPropsType={
    onPageChanged:(pageNumber: number)=>void
    users:UserType[]
    totalUsersCount:number
    pageSize: number
    currentPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void
}

export const Users = (props:UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(el => {
                return <span className={props.currentPage === el ? s.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(el)
                             }}>{el}</span>
            })
            }
            {props.users.map(u => <div key={u.id}>
                <span>
                <div>
                <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                </div>
                <div>
            {
                u.followed
                    ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                    : <button onClick={() => props.follow(u.id)}>Follow</button>
            }
                </div>
                </span>
                <span>
                <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
                </span>
                <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
                </span>
                </span>
            </div>)}
        </div>
    );
};
