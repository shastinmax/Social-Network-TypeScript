import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import React, {RefObject} from "react";
import {AddPostType, PostsType} from "../../../redux/state";

type MyPostsProps={
    posts:Array<PostsType>
    addPost:AddPostType
}

export const MyPosts:React.FC<MyPostsProps> = (props) => {
    let post = props.posts.map(({id,message, likesCount}) => (
        <React.Fragment key={id}><Post message={message} likesCount={likesCount}/></React.Fragment>))

    let newPostElement=React.createRef<HTMLTextAreaElement>()


    let addPost=()=>{
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
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