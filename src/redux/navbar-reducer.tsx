
import {GlobalReducerType} from "./dialogs-reducer";

export type navBarACType={
    type:'NAV-BAR'
}
export type NavbarRoutesType={
    path:string
    title:string
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
        {path: '/profile', title: 'Profile'},
        {path: '/dialogs', title: 'Message'},
        {path: '/news', title: 'News'},
        {path: '/music', title: 'Music'},
        {path: '/settings', title: 'Settings'},
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