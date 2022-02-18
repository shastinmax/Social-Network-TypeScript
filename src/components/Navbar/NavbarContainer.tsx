import React from "react";
import {Navbar} from "./Navbar";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {NavBarType} from "../../redux/navbar-reducer";
import {Dispatch} from "redux";

type MapStateToPropsType={
    state:NavBarType
}


export type NavBarPropsType=MapStateToPropsType
const mapStateToProps=(state:AppStateType):MapStateToPropsType=>{
    return {
        state:state.navbar
    }
}
const mapDispatchToProps=(dispatch:Dispatch)=>{
    return {

    }
}

export const NavbarContainer=connect(mapStateToProps,mapDispatchToProps)(Navbar)



