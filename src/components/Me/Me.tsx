import React, {useEffect} from 'react';
import {useAppSelector} from "../common/hook/selectorHook";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {useDispatch} from "react-redux";
import {Profile} from "../Profile/Profile";
import {useParams} from "react-router-dom";
import {
    selectProfile,
    selectStatus
} from "../../redux/selectors/profileSelector/profileSelector";
import {
    selectIdAuth,
    selectIsAuth
} from "../../redux/selectors/authSelector/authSelector";

export const Me = () => {
    const dispatch = useDispatch()

    const isAuth = useAppSelector(selectIsAuth)
    const id = useAppSelector(selectIdAuth)
    const profile = useAppSelector(selectProfile)
    const status = useAppSelector(selectStatus)

    let {userId} = useParams()

    useEffect(() => {
        if (id) {
            dispatch(getUserProfile(+id))
            dispatch(getStatus(+id))
        }
    }, [])

    return (
        <div>
            <Profile userId={userId}
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


