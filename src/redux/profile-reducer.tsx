import {DialogsType, NewPostType} from "./state";

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    text: string
}
export type ActionProfileReducerType = AddPostActionType | UpdateNewPostTextActionType

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const profileReducer = (state: DialogsType, action:ActionProfileReducerType) => {

    if (action.type === ADD_POST) {

        let newPost: NewPostType = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
        }
        state.posts.push(newPost)
        state.newPostText = ''

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.text

    }

    return state
}