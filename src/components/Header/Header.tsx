import React from "react";
import s from './Header.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import {InitialStateType} from "../../redux/auth-reducer";

type HeaderPropsType = {
    auth: InitialStateType
    logoutTC: () => void
}

export const Header = (props: HeaderPropsType) => {
    const navigate = useNavigate()
const onClickHandler = ()=>{
    props.logoutTC()

}
    return (
        <header className={s.header}>
            <img
                src='http://pngimg.com/uploads/magic_hat/small/magic_hat_PNG102.png' alt={'img'}/>
            <div className={s.loginBlock}>
                {props.auth.isAuth ? <div>{props.auth.login} - <button onClick={props.logoutTC}>Log out</button></div> :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
