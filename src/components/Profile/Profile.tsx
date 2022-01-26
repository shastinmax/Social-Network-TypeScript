import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {
    allCreator,
    PostsType, RouteType, StoreType,
} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostContainers";

type ProfileTypeProps = {

}

export const Profile: React.FC<ProfileTypeProps> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}
