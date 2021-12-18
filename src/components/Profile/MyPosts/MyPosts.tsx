import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import React, {RefObject} from "react";
import {PostsType} from "../../../redux/state";

type MyPostsProps={
    posts:Array<PostsType>
}

export const MyPosts:React.FC<MyPostsProps> = (props) => {
    let post = props.posts.map(({message, likesCount}) => (
        <React.Fragment key={message + likesCount}><Post message={message} likesCount={likesCount}/></React.Fragment>))

    let newPostElement=React.createRef<HTMLTextAreaElement>()

    const addPost=()=>{
        let text=newPostElement.current?.value
        alert(text)
    }

    return (
        <div className={s.myposts}>
            <h3>My Posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <button onClick={()=>addPost()}>Add post</button>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}