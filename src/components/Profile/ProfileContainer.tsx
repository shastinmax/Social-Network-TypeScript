import React, {ComponentType, useEffect, useState} from "react";
import {Profile} from "./Profile";
import {connect, useDispatch} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {NavigateFunction, Params, useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";
import {useAppSelector} from "../common/hook/selectorHook";
import {selectIsAuth, selectIsProfile} from "../../redux/selectors/users-selectors";


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
    let {userId} = useParams()
    const {isAuth} = useAppSelector(selectIsAuth)
    const {profile, status} = useAppSelector(selectIsProfile)
    console.log(userId)

    useEffect(() => {
        if (userId) {
            dispatch(getUserProfile(+userId))
            dispatch(getStatus(+userId))
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
//
//
// let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
//     profile: state.profilePage.profile,
//     status: state.profilePage.status,
//     authorizedUserId: state.auth.id,
//     isAuth: state.auth.isAuth
//
// })
//
// export function withRouter<T>(Component: ComponentType<T>): ComponentType<T & WithRouterType> {
//
//     const ComponentWithRouterProp = (props: T & WithRouterType) => {
//         console.log("ComponentWithRouterProp")
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return (
//             <Component {...props} router={{location, navigate, params}}
//             />
//         );
//     }
//     return ComponentWithRouterProp;
// }
//
// type WithRouterType = Location & NavigateFunction & Readonly<Params<string>>;
//
// // @ts-ignore
// export default compose<React.ComponentType>(connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {
//         getUserProfile, getStatus, updateStatus, savePhoto, saveProfile
//     }), withRouter,
//     // withAuthRedirect
// )(ProfileContainer)