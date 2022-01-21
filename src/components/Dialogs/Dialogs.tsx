import React from "react";
import s from './Dialogs.module.css'
import {StyledNavLinkDialog} from "./StyledNavLinkDialog/StyledNavLinkDialog";
import {Dialog} from "./Dialog/Dialog";
import {
    allCreator,
    DialogsType,
} from "../../redux/state";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

type DialogsTypeProps={
    dialog:DialogsType
    dispatch: (action: allCreator) => void
}

export const Dialogs:React.FC<DialogsTypeProps> = (props) => {

    let dialogs = props.dialog.dialog.map(({id,pathDialog, name}) => (<React.Fragment key={id}><StyledNavLinkDialog
        pathDialog={pathDialog} name={name}/></React.Fragment>))

    let message=props.dialog.dialog.map(({id,pathDialog, name,dialog})=>(<React.Fragment key={id}>
        <Dialog dialog={dialog}/>
    </React.Fragment>))
    let newMessageBody=props.dialog.newMessageBody

    const newMessageElement=React.createRef<HTMLTextAreaElement>()

    const addMessage=()=>{
        if(newMessageElement.current){
            props.dispatch(sendMessageAC())
        }
    }
 const onNewMessageChange=()=>{
     let text: string = newMessageElement.current?.value || ""
     if (newMessageElement.current) {
         props.dispatch(updateNewMessageBodyAC(text))
     }
 }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogs}

            </div>
            <div className={s.messages}>

                {message}
                <textarea value={newMessageBody} onChange={onNewMessageChange} ref={newMessageElement} placeholder='Enter your message'></textarea>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>

        </div>
    )
}