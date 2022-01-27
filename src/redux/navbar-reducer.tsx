import {NavBarType, SendMessageActionType, UpdateNewMessageBodyActionType} from "./store";
import {AddPostActionType, UpdateNewPostTextActionType} from "./profile-reducer";
import {GlobalReducerType} from "./dialogs-reducer";

export type navBarACType={
    type:'NAV-BAR'
}

const NAV_BAR='NAV-BAR'
export const navBarAC=():navBarACType=>({
    type:NAV_BAR
})

let initialState = {
    routes: [
        {path: '/profile', title: 'Profile'},
        {path: '/dialogs', title: 'Message'},
        {path: '/news', title: 'News'},
        {path: '/music', title: 'Music'},
        {path: '/settings', title: 'Settings'},
    ]
}

export const navbarReducer = (state: NavBarType = initialState, action: GlobalReducerType) => {
    switch (action.type) {
        case NAV_BAR:
            return state
        default:
            return state
    }
}