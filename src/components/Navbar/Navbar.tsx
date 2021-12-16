import React from "react";
import s from './Navbar.module.css'
import {StyledNavLink} from "./StyledNavLink/StyledNavLink";
import {RouteType} from "../../redux/state";

type NavbarProps={
    routes:Array<RouteType>
}

export const Navbar:React.FC<NavbarProps> = (props) => {

    return (
        <div className={s.nav}>
            <nav >
                {props.routes.map(({title,path}) => (<React.Fragment key={path+title}><StyledNavLink title={title} path={path}/></React.Fragment>))}
            </nav>
        </div>
    )
}
