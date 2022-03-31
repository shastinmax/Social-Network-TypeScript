import React from 'react';
import s from "./Paginator.module.css";

type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

export const Paginator = ({totalUsersCount,pageSize,currentPage,onPageChanged,}: UsersPropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map(el => {
            return <span className={currentPage === el ? s.selectedPage : ''}
                         onClick={() => {
                             onPageChanged(el)
                         }}>{el}</span>
        })}
    </div>
}




