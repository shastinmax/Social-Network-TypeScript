
import {navBarACType} from "./navbar-reducer";
import {AddPostActionType, UpdateNewPostTextActionType} from "./profile-reducer";


export type UpdateNewMessageBodyActionType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string
}
export type SendMessageActionType = {
    type: "SEND-MESSAGE"

}
type DialogType = {
    message: string
    id: number
}
type PostsType = {
    name: string
    id: number
}
export type GlobalReducerType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | navBarACType

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

export const updateNewMessageBodyAC = (newText: string): UpdateNewMessageBodyActionType => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: newText
})
export const sendMessageAC = (): SendMessageActionType => ({
    type: SEND_MESSAGE

})

export type InitialStateType={
    dialogs: Array<PostsType>
    messages: Array<DialogType>
    newMessageBody: string
}

let initialState:InitialStateType = {
    dialogs: [
        {id: 1, name: 'Slava'},
        {id: 2, name: 'Borya'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Viktor'}],
    messages: [
        {id: 1, message: 'Hi Kaktus'},
        {id: 2, message: 'Hi klaus'},
        {id: 3, message: 'Hi Valeron'},
        {id: 4, message: 'Hi hello'},
        {id: 5, message: 'Hi you'}
    ],
    newMessageBody: "",
}

export const dialogsReducer = (state:InitialStateType= initialState, action: GlobalReducerType):InitialStateType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            let stateCopy={...state}
            stateCopy.newMessageBody = action.body;
            return stateCopy ;
        case SEND_MESSAGE:
            let copyState={...state}
            let body = copyState.newMessageBody
            copyState.newMessageBody = ''
            copyState.messages=[...state.messages]
            copyState.messages.push({id: 5, message: body})
            return copyState;
        default:
            return state
    }
}