let rerenderEntireTree = (state: StateType) => {
    console.log(state)
}

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
    message: string | undefined
    likesCount: number
}
export type StateType = {
    profilePage: ProfileType
    dialogsPage: DialogsType

}
export type UpdateNewPostTextType = (title: string) => void

export const state: StateType = {
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

}

export const addPost: AddPostType = () => {

    let newPost: NewPostType = {
        id: 5,
        message: state.dialogsPage.newPostText,
        likesCount: 0,
    }
    state.dialogsPage.posts.push(newPost)
    state.dialogsPage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText: UpdateNewPostTextType = (text: string) => {
    state.dialogsPage.newPostText = text
    rerenderEntireTree(state)
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer
}