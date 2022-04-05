import React from "react";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostContainers";
import {ProfilePropsType} from "./ProfileContainer";

type propsType = {
    profile: ProfilePropsType | null
    status: string,
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}

export const Profile = (props: propsType) => {

    const {isOwner, profile, status, updateStatus, savePhoto} = props

    return (
        <div>
            <ProfileInfo isOwner={isOwner}
                         profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         savePhoto={savePhoto}/>
            <MyPostsContainer/>
        </div>
    )
}
