import React, {useEffect} from 'react';
import {useAppSelector} from "../common/hook/selectorHook";
import {selectIsAuth, selectIsProfile} from "../../redux/selectors/users-selectors";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {useDispatch} from "react-redux";
import {Profile} from "../Profile/Profile";
import {useParams} from "react-router-dom";

export const Me = () => {
    const dispatch = useDispatch()
    const {isAuth, id} = useAppSelector(selectIsAuth)
    const {profile, status} = useAppSelector(selectIsProfile)
    let {userId} = useParams()
    console.log(userId, 'userId')

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


