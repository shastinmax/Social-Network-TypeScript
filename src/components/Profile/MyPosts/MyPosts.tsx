import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import React from "react";
import {PostsType} from "../../../index";

type MyPostsProps={
    posts:Array<PostsType>
}

export const MyPosts:React.FC<MyPostsProps> = (props) => {
    let post = props.posts.map(({message, likesCount}) => (
        <React.Fragment key={message + likesCount}><Post message={message} likesCount={likesCount}/></React.Fragment>))

    return (
        <div className={s.myposts}>
            <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}