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
           <Post/>
           <Post/>
           <Post/>
           <Post/>
        </div>
    )
}