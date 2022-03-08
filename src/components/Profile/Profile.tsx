import React from "react";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostContainers";
import {ProfilePropsType} from "./ProfileContainer";

type propsType = {
    profile: ProfilePropsType | null
    status: string,
    updateStatus: (status:string)=>void
}

export const Profile = (props: propsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}
