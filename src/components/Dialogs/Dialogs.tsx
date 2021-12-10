import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {dialog} from "../../constants/constans";
import {StyledNavLinkDialog} from "../StyledNavLinkDialog/StyledNavLinkDialog";

export const Dialogs = () => {

    let dialogs = dialog.map(({pathDialog, name}) => (<React.Fragment key={pathDialog + name}><StyledNavLinkDialog
        pathDialog={pathDialog} name={name}/></React.Fragment>))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogs}


            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hello</div>
                <div className={s.dialog}>YOOOO</div>
                <div className={s.dialog}>Bye</div>
                <div className={s.dialog}>))))))</div>
                <div className={s.dialog}>Staaaart</div>
            </div>
        </div>
    )
}