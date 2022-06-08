import React from "react";
import s from './Navbar.module.css'
import {StyledNavLink} from "./StyledNavLink/StyledNavLink";
import {useAppSelector} from "../common/hook/selectorHook";
import {selectNavbar} from "../../redux/selectors/navbarSelector/navbarSelector";

export const Navbar = () => {
    const routes = useAppSelector(selectNavbar)
    return (
        <div className={s.nav}>
            <nav>
                {routes.map(({title, path, image}) => (
                    <React.Fragment key={path + title}>
                        <StyledNavLink title={title} path={path} image={image}/>
                    </React.Fragment>))}
            </nav>
        </div>
    )
}
