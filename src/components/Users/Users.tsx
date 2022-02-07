import React from "react";
import s from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/risuem-chelovek-rebenku-14.jpg'
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    users: UserType[]
    totalUsersCount:number
    pageSize:number
    setUsers: (Users: UserType[]) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount=this.props.totalUsersCount/this.props.pageSize



        return <div>

            {this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                </div>
                <div>
                    {
                        u.followed
                            ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
}
