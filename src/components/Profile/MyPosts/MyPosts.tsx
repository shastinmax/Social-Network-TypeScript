import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import React from "react";
import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControl";
import {useAppSelector} from "../../common/hook/selectorHook";

import {addPostAC} from "../../../redux/profile-reducer";
import {useDispatch} from "react-redux";
import {selectPosts} from "../../../redux/selectors/profileSelector/profileSelector";

type AddNewPostFormType = {
    newPostBody: string
}
export const MyPosts = React.memo(() => {
        const dispatch = useDispatch()
        const posts = useAppSelector(selectPosts)

        let post = posts.map(({id, message, likesCount}) => (
            <React.Fragment>
                <Post key={id} message={message} likesCount={likesCount} id={id}/>
            </React.Fragment>))

        let onAddPost = (values: AddNewPostFormType) => {
            dispatch(addPostAC(values.newPostBody))
            dispatch(reset('myPostAddPostForm'))
        }
        return (
            <div className={s.myPosts}>
                <h3 className={s.postTitle}>My Posts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {post}
                </div>
            </div>
        )
    }
)
const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.postTextarea} component={Textarea}
                       name='newPostBody'
                       placeholder='Enter your post'
                       validate={[required, maxLength10]}/>
            </div>
            <button className={s.btnPost}>Add post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<AddNewPostFormType>({form: 'myPostAddPostForm'})(AddNewPostForm)