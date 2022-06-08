import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {useDispatch} from "react-redux";
import {
    getStatus,
    getUserProfile,
    savePhoto,
    saveProfile,
    updateStatus
} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../common/hook/selectorHook";
import {
    selectProfile,
    selectStatus
} from "../../redux/selectors/profileSelector/profileSelector";
import {selectIsAuth} from "../../redux/selectors/authSelector/authSelector";


export type ProfilePropsType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: true,
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export const ProfileContainer = () => {
    const dispatch = useDispatch()

    const {userId} = useParams()
    const isAuth = useAppSelector(selectIsAuth)
    const profile = useAppSelector(selectProfile)
    const status = useAppSelector(selectStatus)
    console.log(userId)

    const convertFromStringToNumber = (value: string) => Number(value)

    useEffect(() => {
        if (userId) {
            dispatch(getUserProfile(convertFromStringToNumber(userId)))
            dispatch(getStatus(convertFromStringToNumber(userId)))
        }

    }, [])

    return (
        <div>
            <Profile
                userId={userId}
                isAuth={isAuth}
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                savePhoto={savePhoto}
                saveProfile={saveProfile}
            />
        </div>
    )
}
