import React from "react";
import s from './Dialogs.module.css'
import {StyledNavLinkDialog} from "./StyledNavLinkDialog/StyledNavLinkDialog";
import {Dialog} from "./Dialog/Dialog";
import {DialogType} from "../../redux/state";

type DialogsTypeProps={
    dialog:Array<DialogType>
}

export const Dialogs:React.FC<DialogsTypeProps> = (props) => {

    let dialogs = props.dialog.map(({id,pathDialog, name}) => (<React.Fragment key={id}><StyledNavLinkDialog
        pathDialog={pathDialog} name={name}/></React.Fragment>))

    let message=props.dialog.map(({id,pathDialog, name,dialog})=>(<React.Fragment key={id}>
        <Dialog dialog={dialog}/>
    </React.Fragment>))

    const newMessageElement=React.createRef<HTMLTextAreaElement>()

    const addMessage=()=>{
        alert(newMessageElement.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogs}

            </div>
            <div className={s.messages}>

                {message}
                <textarea ref={newMessageElement}></textarea>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>

        </div>
    )
}