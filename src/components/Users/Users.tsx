import React from "react";
import s from './users.module.css'
import {UsersPropsType} from "./UsersContainer";
import  axios from "axios";
import userPhoto from '../../assets/images/risuem-chelovek-rebenku-14.jpg'


export const Users = (props: UsersPropsType) => {
if(props.users.length===0){

    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{

        props.setUsers(response.data.items)
    })

}

    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img className={s.userPhoto} src={u.photos.small!==null?u.photos.small:userPhoto}/>
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

}