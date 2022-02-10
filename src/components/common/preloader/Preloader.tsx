import s from "../../Users/users.module.css";
import preloader from "../../../assets/images/preloader.svg";
import React from "react";

export const Preloader=()=>{
    return(
        <img className={s.preloader} src={preloader}/>
    )
}