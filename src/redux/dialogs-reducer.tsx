import {AddPostActionType, DialogsType, NewPostType, StateType, UpdateNewPostTextActionType} from "./state";


export type UpdateNewMessageBodyActionType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string
}
export type SendMessageActionType = {
    type: "SEND-MESSAGE"

}
export type ActionDialogsReducerType=AddPostActionType | UpdateNewPostTextActionType|UpdateNewMessageBodyActionType|SendMessageActionType

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

export const dialogsReducer=(state:DialogsType,action:ActionDialogsReducerType)=>{

     if(action.type===UPDATE_NEW_MESSAGE_BODY){
        state.newMessageBody=action.body

    }else if(action.type===SEND_MESSAGE){
        let body=state.newMessageBody
        state.newMessageBody=''
        state.dialog.push({id: 5, pathDialog: '/dialogs/4', name: 'Viktor', dialog: body})

    }
    return state
}