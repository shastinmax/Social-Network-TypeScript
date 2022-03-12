import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import React from "react";
import {MyPostPropsType} from "./MyPostContainers";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type AddNewPostFormType = {
    newPostBody: string
}

export const MyPosts = (props: MyPostPropsType) => {
    let post = props.posts.map(({id, message, likesCount}) => (
        <React.Fragment key={id}><Post message={message} likesCount={likesCount}/></React.Fragment>))
    const newPostElement = React.createRef<HTMLTextAreaElement>()


    let onAddPost = (values: AddNewPostFormType) => {
        props.addPost(values.newPostBody)
    }
    // const onPostChange = () => {
    //     debugger
    //     let text: string = newPostElement.current?.value || ""
    //     props.updateNewPostText(text)
    // }


    return (
        <div className={s.myposts}>
            <h3>My Posts</h3>
            <AddNewPostFormRedux onSubmit = {onAddPost}/>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}

const AddNewPostForm:React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name='newPostBody' placeholder='Enter your post'/>
            </div>
            <button>Add post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<AddNewPostFormType>({form: 'myPostAddPostForm'})(AddNewPostForm)