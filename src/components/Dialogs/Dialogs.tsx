import React from "react";
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {reduxForm, reset} from "redux-form";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";
import {useDispatch} from "react-redux";
import {sendMessageAC} from "../../redux/dialogs-reducer";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../common/hook/selectorHook";

import monkey from '../../assets/images/man-user-svgrepo-com.svg'
import {
    selectDialogs,
    selectMessages
} from "../../redux/selectors/dialogsSelector/dialogsSelector";
import {selectIsAuth} from "../../redux/selectors/authSelector/authSelector";

export type AddMessageFormType = {
    newMessageBody: string
}

export const Dialogs = () => {
    const dispatch = useDispatch()

    const dialogs = useAppSelector(selectDialogs)
    const messages = useAppSelector(selectMessages)
    const isAuth = useAppSelector(selectIsAuth)

    let dialogsElements = dialogs.map(({id, name}) => (
        <div className={s.messageName} key={id}><img src={monkey} alt="img"/> {name}</div>))
    let messageElements = messages.map(({id, message}) => (
        <React.Fragment key={id}><Dialog dialog={message}/></React.Fragment>))

    const addNewMessage = ({newMessageBody}: AddMessageFormType) => {
        dispatch(sendMessageAC(newMessageBody))
        dispatch(reset('dialogAddMessageForm'))
    }
    if (!isAuth) {
        return <Navigate to={'/login'}/>
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