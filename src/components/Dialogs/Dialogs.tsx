import React from "react";
import s from './Dialogs.module.css'
import {StyledNavLinkDialog} from "./StyledNavLinkDialog/StyledNavLinkDialog";
import {Dialog} from "./Dialog/Dialog";
import {DialogType} from "../../redux/state";

type DialogsTypeProps={
    dialog:Array<DialogType>
}

export const Dialogs:React.FC<DialogsTypeProps> = (props) => {

    let dialogs = props.dialog.map(({pathDialog, name}) => (<React.Fragment key={pathDialog + name}><StyledNavLinkDialog
        pathDialog={pathDialog} name={name}/></React.Fragment>))

    let message=props.dialog.map(({pathDialog, name,dialog})=>(<React.Fragment key={pathDialog + name}>
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