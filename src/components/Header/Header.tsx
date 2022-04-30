import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {InitialStateType, logoutTC} from "../../redux/auth-reducer";
import {useAppSelector} from "../common/hook/selectorHook";
import {selectIsAuth} from "../../redux/selectors/users-selectors";
import {useDispatch} from "react-redux";

type HeaderPropsType = {
    auth: InitialStateType
    logoutTC: () => void
}

export const Header = () => {
    const dispatch = useDispatch()
    const {login, isAuth} = useAppSelector(selectIsAuth)
    const onClickLogout = () => {
        dispatch(logoutTC())
    }


    return (
        <header className={s.header}>
            <img
                src='http://pngimg.com/uploads/magic_hat/small/magic_hat_PNG102.png' alt='img'/>
            <div className={s.loginBlock}>
                {isAuth
                    ? <div>{login} - <button onClick={onClickLogout}>Log out</button></div> :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
