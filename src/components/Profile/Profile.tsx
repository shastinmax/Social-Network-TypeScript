import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {
    allCreator,
    PostsType, RouteType,
} from "../../redux/store";

type ProfileTypeProps = {
    posts: Array<RouteType>
    newPostText: string
    dispatch: (action: allCreator) => void
}

export const Profile: React.FC<ProfileTypeProps> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}
