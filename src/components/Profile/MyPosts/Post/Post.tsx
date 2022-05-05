import s from "./Post.module.css";
import React, {FC, useState} from "react";
import userPost from '../../../../assets/images/user-profile-svgrepo-com (1).svg'
import like from '../../../../assets/images/like.svg'
import likeRed from '../../../../assets/images/like-red.svg'
import {useDispatch} from "react-redux";
import {deletePostAC, removePost, updateLikesCounter} from "../../../../redux/profile-reducer";

type PostPropsType = {
    message: string | undefined
    likesCount: number
    id:string
}

export const Post: FC<PostPropsType> = (props) => {
    const {message, likesCount,id} = props
    const dispatch=useDispatch()
    const onHandlerLike = () => {
        dispatch(updateLikesCounter(id, likesCount+1))
    }
    const onHandlerRemovePost = () => {
        dispatch(deletePostAC(id))
    }

    return (
        <div className={s.wrapperPost}>
            <div className={s.item}>
                <div className={s.postImgMess}>
                    <img src={userPost} alt={'logo'}/>
                    <span>{message}</span>
                </div>
                <div className={s.postLike}>
                    <span>
                        {likesCount > 0
                            ? <img onClick={onHandlerLike} className={s.like} src={likeRed} alt="like"/>
                            : <img onClick={onHandlerLike} className={s.like} src={like} alt="like"/>}
                        {likesCount}</span>
                </div>
            </div>
                <button onClick = {onHandlerRemovePost}className={s.btnRemove} >remove</button>
        </div>
    )
}