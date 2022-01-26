import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {
    allCreator,
    PostsType, RouteType, StoreType,
} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostContainers";

type ProfileTypeProps = {
    store:StoreType
}

export const Profile: React.FC<ProfileTypeProps> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}
