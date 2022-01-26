import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import React from "react";
import { RouteType
} from "../../../redux/store";


type MyPostsProps = {
    posts: Array<RouteType>
    updateNewPostText: (text:string)=>void
    addPost:()=>void
    newPostText:string
}

export const MyPosts: React.FC<MyPostsProps> = (props) => {
    let post = props.posts.map(({id, message, likesCount}) => (
        <React.Fragment key={id}><Post message={message} likesCount={likesCount}/></React.Fragment>))

    const newPostElement = React.createRef<HTMLTextAreaElement>()


    let onAddPost = () => {
        props.addPost()

    }
    const onPostChange = () => {
        let text: string = newPostElement.current?.value || ""
            props.updateNewPostText(text)


    }

    return (
        <div className={s.myposts}>
            <h3>My Posts</h3>
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}