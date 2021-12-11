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