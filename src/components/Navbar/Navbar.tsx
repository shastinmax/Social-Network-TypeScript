import React from "react";
import s from './Navbar.module.css'
import {StyledNavLink} from "./StyledNavLink/StyledNavLink";
import {NavbarRoutesType} from "../../redux/store";

type NavbarProps={
state:Array<NavbarRoutesType>
}

export const Navbar:React.FC<NavbarProps> = (props) => {

    return (
        <div className={s.nav}>
            <nav >
                {props.state.map(({title,path}) => (<React.Fragment key={path+title}><StyledNavLink title={title} path={path}/></React.Fragment>))}
            </nav>
        </div>
    )
}
