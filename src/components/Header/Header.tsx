import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../common/hook/selectorHook";
import {useDispatch} from "react-redux";
import userPhoto from "../../assets/images/risuem-chelovek-rebenku-14.jpg";
import {selectProfile} from "../../redux/selectors/profileSelector/profileSelector";
import {selectIsAuth, selectLogin} from "../../redux/selectors/authSelector/authSelector";
import {logoutTC} from "../../redux/middlewares/auth/logout";

export const Header = () => {
    const profile = useAppSelector(selectProfile)
    const dispatch = useDispatch()
    const isAuth = useAppSelector(selectIsAuth)
    const login = useAppSelector(selectLogin)
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
                    ? <div className={s.header_name_profile}>
                        {login} -
                        <button className={s.button_header} onClick={onClickLogout}>Log out</button>
                    </div>
                    :
                    <NavLink className={s.login} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
