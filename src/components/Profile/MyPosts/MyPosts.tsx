import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.myposts}>
            <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={'Hello'} likesCount={15}/>
                <Post message={'Yo'} likesCount={7}/>
                <Post message={'Goodbye'}/></div>
        </div>
    )
}