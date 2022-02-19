import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/risuem-chelovek-rebenku-14.jpg";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void

}

export const Users = (props: UsersPropsType) => {

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
                <NavLink to={'/profile/' + u.id}>
                    <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto}
                         alt='avatar'/>
                </NavLink>
                </div>
                <div>
            {
                u.followed
                    ? <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': "1be3afd1-cb12-4713-953a-273c84cfad9b"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode) {
                                    props.unfollow(u.id)
                                }
                            })


                    }}>Unfollow</button>
                    : <button onClick={() => {

                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': "1be3afd1-cb12-4713-953a-273c84cfad9b"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode) {
                                    props.follow(u.id)
                                }
                            })

                    }

                    }>Follow</button>
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
