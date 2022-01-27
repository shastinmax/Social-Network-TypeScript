import {DialogsType, NewPostType, ProfileType, SendMessageActionType, UpdateNewMessageBodyActionType} from "./store";
import {GlobalReducerType} from "./dialogs-reducer";

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    text: string
}


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostAC=():AddPostActionType=> ({type: ADD_POST})

export const updateNewPostTextAC=(newText:string):UpdateNewPostTextActionType=>({
    type: UPDATE_NEW_POST_TEXT,
    text: newText
})

let initialState={
    posts: [
        {id: 1, message: 'Hi,how are you', likesCount: 12},
        {id: 2, message: 'Hi, you', likesCount: 11},
        {id: 3, message: 'Hi,how are you', likesCount: 11},
        {id: 4, message: 'how are you', likesCount: 12}
    ],
    newPostText: 'it-kamas',
}

export const profileReducer = (state: ProfileType=initialState, action:GlobalReducerType) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: NewPostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost)
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text
            return state
        default:
            return state
    }
}