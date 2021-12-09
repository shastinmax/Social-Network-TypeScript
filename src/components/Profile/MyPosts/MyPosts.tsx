import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";

export const MyPosts=()=>{
    return(
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
           <Post message={'Hello'} likescount={15}/>
           <Post message={'Yo'} likescount={7}/>
           <Post message={'Goodbye'}/>
        </div>
    )
}