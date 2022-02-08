import React from "react";
import s from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/risuem-chelovek-rebenku-14.jpg'
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setUsers: (Users: UserType[]) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    setCurrentPage: (el: number) => void
    setTotalCount:(totalCount:number)=>void
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            {pages.map(el => {
                return <span className={this.props.currentPage === el ? s.selectedPage : ''}
                             onClick={() => {
                                 this.onPageChanged(el)
                             }}>{el}</span>
            })
            }
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
