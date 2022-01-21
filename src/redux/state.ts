export type RouteType = {
    path: string
    title: string
    id: number

}
export type DialogType = {
    pathDialog: string
    name: string
    dialog: string
    id: number
}
export type PostsType = {
    message: string | undefined
    likesCount: number
    id: number
}
export type ProfileType = {
    routes: Array<RouteType>

}
export type DialogsType = {
    posts: Array<PostsType>
    newPostText: string
    newMessageBody:string
    dialog: Array<DialogType>
}
export type AddPostType = () => void
export type NewPostType = {
    id: number
    message: string
    likesCount: number
}
export type StateType = {
    profilePage: ProfileType
    dialogsPage: DialogsType

}
export type UpdateNewPostTextType = (title: string) => void

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    text: string
}
export type UpdateNewMessageBodyActionType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string
}
export type SendMessageActionType = {
    type: "SEND-MESSAGE"

}
export type allCreator = AddPostActionType | UpdateNewPostTextActionType|UpdateNewMessageBodyActionType|SendMessageActionType
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType|UpdateNewMessageBodyActionType|SendMessageActionType) => void
}
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";
export const addPostAC=():AddPostActionType=> ({type: ADD_POST})

export const updateNewPostTextAC=(newText:string):UpdateNewPostTextActionType=>({
        type: UPDATE_NEW_POST_TEXT,
        text: newText
    })
export const updateNewMessageBodyAC=(newText:string):UpdateNewMessageBodyActionType=>({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: newText
})
export const sendMessageAC=():SendMessageActionType=>({
    type: SEND_MESSAGE

})

export const store: StoreType = {
    _state: {
        profilePage: {
            routes: [
                {id: 1, path: '/profile', title: 'Profile'},
                {id: 2, path: '/dialogs', title: 'Message'},
                {id: 3, path: '/news', title: 'News'},
                {id: 4, path: '/music', title: 'Music'},
                {id: 5, path: '/settings', title: 'Settings'}],

        },
        dialogsPage: {
            posts: [
                {id: 1, message: "Hello", likesCount: 15},
                {id: 2, message: "Yo", likesCount: 7},
                {id: 3, message: "Goodbye", likesCount: 0}],
            newPostText: 'it-kamas',
            newMessageBody:"",
            dialog: [
                {id: 1, pathDialog: '/dialogs/1', name: 'Slava', dialog: 'Hello'},
                {id: 2, pathDialog: '/dialogs/2', name: 'Borya', dialog: 'YO-YO'},
                {id: 3, pathDialog: '/dialogs/3', name: 'Igor', dialog: 'Goodbay'},
                {id: 4, pathDialog: '/dialogs/4', name: 'Viktor', dialog: 'YES ABHSS'}]
        }
    //    sidebar:{}
    },
    _callSubscriber() {
        console.log('store changes')
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === ADD_POST) {

            let newPost: NewPostType = {
                id: 5,
                message: this._state.dialogsPage.newPostText,
                likesCount: 0,
            }
            this._state.dialogsPage.posts.push(newPost)
            this._state.dialogsPage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.dialogsPage.newPostText = action.text
            this._callSubscriber()
        }else if(action.type===UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody=action.body
            this._callSubscriber()
        }else if(action.type===SEND_MESSAGE){
          let body=this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody=''
            this._state.dialogsPage.dialog.push({id: 5, pathDialog: '/dialogs/4', name: 'Viktor', dialog: body})
            this._callSubscriber()
        }
    },
}



