import React from "react";
import {InitialStateType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToProps={
    dialogsPage:InitialStateType
}
type MapDispatchToProps={
    updateNewMessageBody:(body:string)=>void,
    sendMessage:()=>void
}

export type UsersPropsType=MapStateToProps & MapDispatchToProps

let mapStateToProps = (state:AppStateType):MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
    return {
        updateNewMessageBody:(body:string)=>{dispatch(updateNewMessageBodyAC(body))},
        sendMessage:()=>{dispatch(sendMessageAC())}
    }
}
export const DialogsContainer = withAuthRedirect(connect(mapStateToProps,mapDispatchToProps)(Dialogs))