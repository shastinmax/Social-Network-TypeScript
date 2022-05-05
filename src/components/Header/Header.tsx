import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {InitialStateType, logoutTC} from "../../redux/auth-reducer";
import {useAppSelector} from "../common/hook/selectorHook";
import {selectIsAuth, selectIsProfile} from "../../redux/selectors/users-selectors";
import {useDispatch} from "react-redux";
import userPhoto from "../../assets/images/risuem-chelovek-rebenku-14.jpg";

type HeaderPropsType = {
    auth: InitialStateType
    logoutTC: () => void
}

export const Header = () => {
    const {profile} = useAppSelector(selectIsProfile)
    const dispatch = useDispatch()
    const {login, isAuth} = useAppSelector(selectIsAuth)
    const onClickLogout = () => {
        dispatch(logoutTC())
    }


    return (
        <header className={s.header}>
            <h1 className={s.header_title}>Social</h1>
            <div className={s.loginBlock}>
                <img src={profile?.photos.large || userPhoto} className={s.headerPhoto}
                     alt='avatar'/>
                {isAuth
                    ? <div className={s.header_name_profile}>{login} - <button className={s.button_header} onClick={onClickLogout}>Log out</button></div> :
                    <NavLink className={s.login} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
