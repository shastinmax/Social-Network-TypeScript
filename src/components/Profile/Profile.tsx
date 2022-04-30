import React from "react";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePropsType} from "./ProfileContainer";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {MyPosts} from "./MyPosts/MyPosts";

type propsType = {
    profile: ProfilePropsType | null
    status: string,
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
    saveProfile: (profile: ProfilePropsType) => Promise<any>
}

export const Profile = (props: propsType) => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    const {isOwner, profile, status, updateStatus, savePhoto, saveProfile} = props

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
