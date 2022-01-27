import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps=(state)=> {
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
const mapDispatchToProps=(dispatch)=> {
    return {
        addPost: () => dispatch(addPostAC()),
        updateNewPostText: (text) => dispatch(updateNewPostTextAC(text))
    }
}

export const MyPostsContainer=connect()(MyPosts)