import React from "react";
import s from './Navbar.module.css'
import {StyledNavLink} from "../StyledNavLink/StyledNavLink";
import {routes} from "../../constants/constans";


export const Navbar = () => {

    return (
        <div className={s.nav}>
            <nav >
                {routes.map(({title,path}) => (<React.Fragment key={path+title}><StyledNavLink title={title} path={path}/></React.Fragment>))}
            </nav>
        </div>
    )
}
