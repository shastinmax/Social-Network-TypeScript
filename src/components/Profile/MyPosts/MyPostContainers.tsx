
import React from "react";
import {
    allCreator,
    PostsType, RouteType, StoreType
} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsProps = {
    store:StoreType

}

export const MyPostsContainer: React.FC<MyPostsProps> = (props) => {

    let state=props.store.getState()


    let addPost = () => {

            props.store.dispatch(addPostAC())

    }
    const onPostChange = (text:string) => {
        // let text: string = newPostElement.current?.value || ""

            props.store.dispatch(updateNewPostTextAC(text))


    }

    return (
        <MyPosts addPost={addPost}  updateNewPostText={onPostChange} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
    )
}