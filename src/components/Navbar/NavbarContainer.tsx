import React from "react";
import s from './Navbar.module.css'
import {StyledNavLink} from "./StyledNavLink/StyledNavLink";
import {NavbarRoutesType} from "../../redux/store";

import {Navbar} from "./Navbar";
import {connect} from "react-redux";

const mapStateToProps=(state)=>{
    return {
        state
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {

    }
}

export const NavbarContainer=connect(mapStateToProps,mapDispatchToProps)(Navbar)



