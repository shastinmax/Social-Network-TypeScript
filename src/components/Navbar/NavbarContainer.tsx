import React from "react";
import s from './Navbar.module.css'
import {StyledNavLink} from "./StyledNavLink/StyledNavLink";
import {NavbarRoutesType} from "../../redux/store";
import {StoreContext} from "../../StoreContext";
import {Navbar} from "./Navbar";



export const NavbarContainer = () => {

    return <StoreContext.Consumer>
        {
            store => {
                let state = store.getState().navBarPage.routes
                return <Navbar state={state}/>
            }}
    </StoreContext.Consumer>
}




