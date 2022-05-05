import React from "react";
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {reduxForm, reset} from "redux-form";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";
import {useDispatch} from "react-redux";
import {sendMessageAC} from "../../redux/dialogs-reducer";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../common/hook/selectorHook";
import {selectIsAuth, selectIsDialogs} from "../../redux/selectors/users-selectors";
import monkey from '../../assets/images/man-user-svgrepo-com.svg'

export type AddMessageFormType = {
    newMessageBody: string
}

export const Dialogs = () => {
    const {dialogs, messages} = useAppSelector(selectIsDialogs)
    const {isAuth} = useAppSelector(selectIsAuth)
    const dispatch = useDispatch()


    let dialogsElements = dialogs.map(({id, name}) => (<div className={s.messageName} key={id}> <img src={monkey} alt="img"/> {name}</div>))
    let messageElements = messages.map(({id, message}) => (<React.Fragment key={id}><Dialog dialog={message}/></React.Fragment>))

    const addNewMessage = (values: AddMessageFormType) => {
        dispatch(sendMessageAC(values.newMessageBody))
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