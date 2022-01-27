import React from "react";
import s from './Navbar.module.css'
import {StyledNavLink} from "./StyledNavLink/StyledNavLink";
import {NavBarPropsType} from "./NavbarContainer";

export const Navbar = (props:NavBarPropsType) => {

    return (
        <div className={s.nav}>
            <nav >
                {props.state.routes.map(({title,path}) => (<React.Fragment key={path+title}><StyledNavLink title={title} path={path}/></React.Fragment>))}
            </nav>
        </div>
    )
}
