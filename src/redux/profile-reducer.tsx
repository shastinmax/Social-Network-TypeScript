import {DialogsType, NewPostType, ProfileType, SendMessageActionType, UpdateNewMessageBodyActionType} from "./store";

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

export const profileReducer = (state: ProfileType, action:AddPostActionType | UpdateNewPostTextActionType|UpdateNewMessageBodyActionType|SendMessageActionType) => {

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