import message from '../assets/images/message.svg'
import user from '../assets/images/user.svg'
import news from '../assets/images/news.svg'
import settings from '../assets/images/settings.svg'
import music from '../assets/images/music.svg'
import users from '../assets/images/USERS.svg'
import {GlobalReducerType} from "./dialogs-reducer";
export type navBarACType={
    type:'NAV-BAR'
}
export type NavbarRoutesType={
    path:string
    title:string
    image:string
}
export type NavBarType = {
    routes:Array<NavbarRoutesType>
}
const NAV_BAR='NAV-BAR'
export const navBarAC=():navBarACType=>({
    type:NAV_BAR
})

let initialState:NavBarType = {
    routes: [
        {path: '/', title: 'Profile',image:user},
        {path: '/dialogs', title: 'Message',image:message},
        {path: '/music', title: 'Music',image:music},
        {path: '/settings', title: 'Settings',image:settings},
        {path: '/users', title: 'Users',image:users},
    ]
}

export const navbarReducer = (state: NavBarType = initialState, action: GlobalReducerType):NavBarType => {
    switch (action.type) {
        case NAV_BAR:
            return state
        default:
            return state
    }
}