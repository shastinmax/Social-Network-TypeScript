import React from "react";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePropsType} from "./ProfileContainer";
import {Navigate} from "react-router-dom";
import {MyPosts} from "./MyPosts/MyPosts";

type propsType = {
    profile: ProfilePropsType | null
    status: string,
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
    saveProfile: any
    isAuth: boolean
    userId: string | undefined
}

export const Profile = (props: propsType) => {
    const {profile, status, updateStatus, savePhoto, saveProfile, isAuth, userId} = props

    if (!isAuth) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div>
            <ProfileInfo
                userId={userId}
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                savePhoto={savePhoto}
                saveProfile={saveProfile}/>
            {!userId && <MyPosts/>}
        </div>
    )
}
