import s from "./Post.module.css";
import React from "react";

export const Post = () => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://cdn.pixabay.com/photo/2017/01/26/13/00/mom-2010524__340.png'/>
                Post
                <div><span>Like</span></div>
            </div>
        </div>
    )
}