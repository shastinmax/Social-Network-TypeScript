import {NavBarType} from "./store";

let initialState={
    routes: [
        {path: '/profile', title: 'Profile'},
        {path: '/dialogs', title: 'Message'},
        {path: '/news', title: 'News'},
        {path: '/music', title: 'Music'},
        {path: '/settings', title: 'Settings'},
    ]
}

export const navbarReducer=(state:NavBarType=initialState,action:string)=>{



    return state
}