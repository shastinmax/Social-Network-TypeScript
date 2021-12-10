import s from './StyledNavLink.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

type StyledNavLinkProps = {
    title: string
    path: string

}

export const StyledNavLink: React.FC<StyledNavLinkProps> = (props) => {
    return (
        <div className={s.item}>
            <NavLink className={({isActive}) => `${s.item} ${isActive ? s.active : ''}`}
                     to={props.path}>{props.title}</NavLink>
        </div>
    )
}