import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {DialogsType} from "../../redux/store";


type DialogsTypeProps = {
    sendMessage: () => void
    dialogsPage: DialogsType
    updateNewMessageBody: (body: string) => void
}

export const Dialogs: React.FC<DialogsTypeProps> = (props) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(({id, name}) => (<div key={id}>{name}</div>))

    let messageElements = state.messages.map(({id, message}) => (<React.Fragment key={id}>
        <Dialog dialog={message}/>
    </React.Fragment>))
    let newMessageBody = state.newMessageBody

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>
    ) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messageElements}
                <textarea value={newMessageBody} onChange={onNewMessageChange} ref={newMessageElement}
                          placeholder='Enter your message'></textarea>
                <div>
                    <button onClick={onSendMessageClick}>Add message</button>
                </div>
            </div>

        </div>
    )
}