import {AddPostActionType, DialogsType, UpdateNewPostTextActionType} from "./store";


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

export const updateNewMessageBodyAC=(newText:string):UpdateNewMessageBodyActionType=>({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: newText
})
export const sendMessageAC=():SendMessageActionType=>({
    type: SEND_MESSAGE

})

export const dialogsReducer=(state:DialogsType,action:ActionDialogsReducerType)=> {

switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody=action.body;
            return state;
        case SEND_MESSAGE:
            let body=state.newMessageBody
            state.newMessageBody=''
            state.messages.push({id: 5, message: body})
            return state;
    default:
        return state
}
}