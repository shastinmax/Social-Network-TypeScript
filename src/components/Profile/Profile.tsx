import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {
    AddPostActionType,
    AddPostType, allCreator,
    PostsType,
    UpdateNewPostTextActionType,
    UpdateNewPostTextType
} from "../../redux/state";

type ProfileTypeProps={
    posts:Array<PostsType>
    newPostText:string
    dispatch:(action:allCreator)=>void
}

export const Profile:React.FC<ProfileTypeProps> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch} />
        </div>
    )
}
