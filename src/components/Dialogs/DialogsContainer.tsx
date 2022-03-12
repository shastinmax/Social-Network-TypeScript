import React from "react";
import {InitialStateType, sendMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToProps={
    dialogsPage:InitialStateType
}
type MapDispatchToProps={
    sendMessage:(newMessageBody:string)=>void
}

export type UsersPropsType=MapStateToProps & MapDispatchToProps

let mapStateToProps = (state:AppStateType):MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
    return {
        sendMessage:(newMessageBody)=>{dispatch(sendMessageAC(newMessageBody))}
    }
}
export default compose<React.ComponentType>(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Dialogs)
