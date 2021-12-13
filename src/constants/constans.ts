import React from "react";

type Route={
    path:string
    title:string

}
type DialogType={
    pathDialog:string
    name:string
    dialog:string
}
type PostType={
    message:string
    likesCount:number
}

export const routes:Array<Route>=[
    {path:'/profile',title:'Profile'},
    {path:'/dialogs',title:'Message'},
    {path:'/news',title:'News'},
    {path:'/music',title:'Music'},
    {path:'/settings',title:'Settings'}]

export const dialog:Array<DialogType>=[
    {pathDialog:'/dialogs/1',name:'Slava',dialog:'Hello'},
    {pathDialog:'/dialogs/2',name:'Borya',dialog:'YO-YO'},
    {pathDialog:'/dialogs/3',name:'Igor',dialog:'Goodbay'},
    {pathDialog:'/dialogs/4',name:'Viktor',dialog:'YES ABHSS'},
]
export const posts=[
    {message: "Hello", likesCount: 15},
    {message: "Yo", likesCount: 7},
    {message: "Goodbye", likesCount: 0},
]