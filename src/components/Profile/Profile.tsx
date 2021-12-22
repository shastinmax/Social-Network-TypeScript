import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddPostType, PostsType, UpdateNewPostTextType} from "../../redux/state";

type ProfileTypeProps={
    posts:Array<PostsType>
    addPost:AddPostType
    newPostText:string
    updateNewPostText:UpdateNewPostTextType
}

export const Profile:React.FC<ProfileTypeProps> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPostText={props.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
