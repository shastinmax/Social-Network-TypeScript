import React from "react";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePropsType} from "./ProfileContainer";
import {Navigate} from "react-router-dom";
import {MyPosts} from "./MyPosts/MyPosts";

type propsType = {
    profile: ProfilePropsType | null
    status: string,
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
    saveProfile:any
        // (profile: ProfilePropsType) => Promise<any>
    isAuth: boolean
}

export const Profile = (props: propsType) => {
    const {isOwner, profile, status, updateStatus, savePhoto, saveProfile,isAuth} = props

    if (!isAuth) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div>
            <ProfileInfo isOwner={isOwner}
                         profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         savePhoto={savePhoto}
                         saveProfile={saveProfile}/>
            <MyPosts/>
        </div>
    )
}
