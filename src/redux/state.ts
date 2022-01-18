

export type RouteType = {
    path: string
    title: string
    id: number

}
export type DialogType = {
    pathDialog: string
    name: string
    dialog: string
    id: number
}
export type PostsType = {
    message: string | undefined
    likesCount: number
    id: number
}
export type ProfileType = {
    routes: Array<RouteType>

}
export type DialogsType = {
    posts: Array<PostsType>
    newPostText: string
    dialog: Array<DialogType>
}
export type AddPostType = () => void
export type NewPostType = {
    id: number
    message: string
    likesCount: number
}
export type StateType = {
    profilePage: ProfileType
    dialogsPage: DialogsType

}
export type UpdateNewPostTextType = (title: string) => void

export type StoreType={
    _state:StateType
    rerenderEntireTree:()=>void
    addPost: AddPostType
    updateNewPostText:(text:string)=>void
    subscribe:(observer:()=>void)=>void
}

export const store= {
    _state: {
        profilePage: {
            routes: [
                {id: 1, path: '/profile', title: 'Profile'},
                {id: 2, path: '/dialogs', title: 'Message'},
                {id: 3, path: '/news', title: 'News'},
                {id: 4, path: '/music', title: 'Music'},
                {id: 5, path: '/settings', title: 'Settings'}],

        },
        dialogsPage: {
            posts: [
                {id: 1, message: "Hello", likesCount: 15},
                {id: 2, message: "Yo", likesCount: 7},
                {id: 3, message: "Goodbye", likesCount: 0}],
            newPostText: 'it-kamas',
            dialog: [
                {id: 1, pathDialog: '/dialogs/1', name: 'Slava', dialog: 'Hello'},
                {id: 2, pathDialog: '/dialogs/2', name: 'Borya', dialog: 'YO-YO'},
                {id: 3, pathDialog: '/dialogs/3', name: 'Igor', dialog: 'Goodbay'},
                {id: 4, pathDialog: '/dialogs/4', name: 'Viktor', dialog: 'YES ABHSS'}]
        }
    },
    _rerenderEntireTree() {
        console.log('jhvjhv')
    },
    updateNewPostText(text: string) {
        this._state.dialogsPage.newPostText = text
        this._rerenderEntireTree()
    },
    addPost(postText:string)  {
        let newPost: NewPostType = {
            id: 5,
            message: postText,
            likesCount: 0,
        }
        this._state.dialogsPage.posts.push(newPost)
        this._state.dialogsPage.newPostText = ''
        this._rerenderEntireTree()
    },
    subscribe (observer: ()=>void) {
        this._rerenderEntireTree = observer
    }
}



