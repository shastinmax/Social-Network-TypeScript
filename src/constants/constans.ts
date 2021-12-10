import React from "react";

type Route={
    path:string
    title:string

}
type DialogType={
    pathDialog:string
    name:string
}
export const routes:Array<Route>=[
    {path:'/profile',title:'Profile'},
    {path:'/dialogs',title:'Message'},
    {path:'/news',title:'News'},
    {path:'/music',title:'Music'},
    {path:'/settings',title:'Settings'}]

export const dialog:Array<DialogType>=[
    {pathDialog:'/dialogs/1',name:'Slava'},
    {pathDialog:'/dialogs/2',name:'Borya'},
    {pathDialog:'/dialogs/3',name:'Igor'},
    {pathDialog:'/dialogs/4',name:'Viktor'},
]