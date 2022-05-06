import s from './StyledNavLink.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

type StyledNavLinkProps = {
    title: string
    path: string
    image: any
}

export const StyledNavLink: React.FC<StyledNavLinkProps> = (props) => {
    const {path, image, title} = props

    return (
        <div className={s.item}>
            <NavLink className={({isActive}) => `${s.item} ${isActive ? s.active : ''}`}
                     to={path}><img className={s.routesImg} src={image} alt="img"/> {title} </NavLink>

        </div>
    )
}