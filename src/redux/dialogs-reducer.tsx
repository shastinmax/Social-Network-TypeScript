import {navBarACType} from "./navbar-reducer";
import {AddPostActionType,} from "./profile-reducer";


export type UpdateNewMessageBodyActionType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string
}
export type SendMessageActionType = {
    type: "SEND-MESSAGE",
    newMessageBody: string

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
    | SendMessageActionType
    | navBarACType

const SEND_MESSAGE = "SEND-MESSAGE";


export const sendMessageAC = (newMessageBody: string): SendMessageActionType => ({
    type: SEND_MESSAGE,
    newMessageBody

})

export type InitialStateType = {
    dialogs: Array<PostsType>
    messages: Array<DialogType>
    newMessageBody: string

}

let initialState: InitialStateType = {
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
    newMessageBody: ''
}

export const dialogsReducer = (state: InitialStateType = initialState, action: GlobalReducerType): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}],

            }
        default:
            return state
    }
}