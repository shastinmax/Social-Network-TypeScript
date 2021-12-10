import React from "react";
import s from './Navbar.module.css'
import {StyledNavLink} from "../StyledNavLink/StyledNavLink";
import {routes} from "../../constants/constans";


export const Navbar = () => {

    return (
        <div>
            <nav className={s.nav}>
                {routes.map(({title,path,key}) => (<StyledNavLink title={title} path={path} key={key}/>))}
            </nav>
        </div>
    )
}
