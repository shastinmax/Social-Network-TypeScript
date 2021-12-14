import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {dialog} from "../../constants/constans";
import {StyledNavLinkDialog} from "./StyledNavLinkDialog/StyledNavLinkDialog";
import {Dialog} from "./Dialog/Dialog";

export const Dialogs = () => {

    let dialogs = dialog.map(({pathDialog, name}) => (<React.Fragment key={pathDialog + name}><StyledNavLinkDialog
        pathDialog={pathDialog} name={name}/></React.Fragment>))

    let message=dialog.map(({pathDialog, name,dialog})=>(<React.Fragment key={pathDialog + name}>
        <Dialog dialog={dialog}/>
    </React.Fragment>))


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogs}

            </div>
            <div className={s.messages}>

                {message}

            </div>
        </div>
    )
}