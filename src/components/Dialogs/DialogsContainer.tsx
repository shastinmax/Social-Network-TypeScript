import React from "react";
import {
    StoreType,
} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

type DialogsContainerType = {
    store: StoreType
}

export const DialogsContainer = () => {


    return <StoreContext.Consumer>
        {
            store => {
        let state = store.getState().dialogsPage

        const onSendMessageClick = () => {
            store.dispatch(sendMessageAC())
        }
        const onNewMessageChange = (body: string) => {
            store.dispatch(updateNewMessageBodyAC(body))
        }
        return <Dialogs updateNewMessageBody={onNewMessageChange} dialogsPage={state} sendMessage={onSendMessageClick}/>
    }}
    </StoreContext.Consumer>
}