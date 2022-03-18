import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {UsersPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";

export type AddMessageFormType = {
    newMessageBody: string
}

export const Dialogs = (props: UsersPropsType) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(({id, name}) => (<div key={id}>{name}</div>))
    let messageElements = state.messages.map(({id, message}) => (<React.Fragment key={id}>
        <Dialog dialog={message}/>
    </React.Fragment>))
    let newMessageBody = state.newMessageBody


    const addNewMessage = (values: AddMessageFormType) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)