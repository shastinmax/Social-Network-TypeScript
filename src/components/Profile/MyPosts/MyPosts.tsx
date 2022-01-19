import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import React, {RefObject} from "react";
import {
    AddPostActionType,
    AddPostType, allCreator,
    PostsType,
    UpdateNewPostTextActionType,
    UpdateNewPostTextType
} from "../../../redux/state";

type MyPostsProps={
    posts:Array<PostsType>
    dispatch:(action:allCreator)=>void
    newPostText:string

}

const addPostAC=():AddPostActionType=>{
    return {
        type:'ADD-POST'
    }
}
const UpdateNewPostText=(newText:string):UpdateNewPostTextActionType=>{
    return {
        type: "UPDATE-NEW-POST-TEXT",
        text: newText
    }
}

export const MyPosts:React.FC<MyPostsProps> = (props) => {
    let post = props.posts.map(({id,message, likesCount}) => (
        <React.Fragment key={id}><Post message={message} likesCount={likesCount}/></React.Fragment>))

    let newPostElement=React.createRef<HTMLTextAreaElement>()


    let addPost=()=>{
        if (newPostElement.current) {
            props.dispatch(addPostAC())
        }
    }
    const onPostChange=()=>{
        let text: string = newPostElement.current?.value || ""
        if(newPostElement.current){
            props.dispatch(UpdateNewPostText(text))
        }

    }

    return (
        <div className={s.myposts}>
            <h3>My Posts</h3>
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}