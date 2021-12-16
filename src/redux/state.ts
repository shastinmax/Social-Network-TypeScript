export type RouteType={
    path:string
    title:string

}
export type DialogType={
    pathDialog:string
    name:string
    dialog:string
}
export type PostsType={
    message:string
    likesCount:number
}
type StateType={
    routes:Array<RouteType>
    dialog:Array<DialogType>
    posts:Array<PostsType>
}

export const state:StateType={
    routes:[
        {path:'/profile',title:'Profile'},
        {path:'/dialogs',title:'Message'},
        {path:'/news',title:'News'},
        {path:'/music',title:'Music'},
        {path:'/settings',title:'Settings'}],
    dialog:[
        {pathDialog:'/dialogs/1',name:'Slava',dialog:'Hello'},
        {pathDialog:'/dialogs/2',name:'Borya',dialog:'YO-YO'},
        {pathDialog:'/dialogs/3',name:'Igor',dialog:'Goodbay'},
        {pathDialog:'/dialogs/4',name:'Viktor',dialog:'YES ABHSS'}],
    posts:[
        {message: "Hello", likesCount: 15},
        {message: "Yo", likesCount: 7},
        {message: "Goodbye", likesCount: 0}]
}