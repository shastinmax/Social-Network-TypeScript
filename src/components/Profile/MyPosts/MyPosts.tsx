import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import React from "react";
import {MyPostPropsType} from "./MyPostContainers";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControl";


type AddNewPostFormType = {
    newPostBody: string
}

export const MyPosts = React.memo((props: MyPostPropsType) => {
        let post = props.posts.map(({id, message, likesCount}) => (
            <React.Fragment key={id}><Post message={message} likesCount={likesCount}/></React.Fragment>))
        const newPostElement = React.createRef<HTMLTextAreaElement>()


        let onAddPost = (values: AddNewPostFormType) => {
            props.addPost(values.newPostBody)
        }

        return (
            <div className={s.myposts}>
                <h3>My Posts</h3>
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
                <Field component={Textarea}
                       name='newPostBody'
                       placeholder='Enter your post'
                       validate={[required, maxLength10]}/>
            </div>
            <button>Add post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<AddNewPostFormType>({form: 'myPostAddPostForm'})(AddNewPostForm)