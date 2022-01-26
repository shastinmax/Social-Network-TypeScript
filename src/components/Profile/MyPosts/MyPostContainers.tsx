import React from "react";
import {
    StoreType
} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";



export const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                store => {
            let state = store.getState()
            let addPost = () => {
                store.dispatch(addPostAC())
            }
            const onPostChange = (text: string) => {
                // let text: string = newPostElement.current?.value || ""
                store.dispatch(updateNewPostTextAC(text))
            }

            return <MyPosts addPost={addPost} updateNewPostText={onPostChange}
                            posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}/>
        }}</StoreContext.Consumer>
    )
}