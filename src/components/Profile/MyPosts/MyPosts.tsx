
import {Post} from "./Post/Post";

export const MyPosts=()=>{
    return(
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
           <Post message={'Hello'} likesCount={15}/>
           <Post message={'Yo'} likesCount={7}/>
           <Post message={'Goodbye'}/>
        </div>
    )
}