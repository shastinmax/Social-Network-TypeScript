import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {navbarReducer} from "./navbar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"


let reducers=combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar:navbarReducer,
    usersPage:usersReducer,
    auth:authReducer,

})
export type AppStateType = ReturnType<typeof reducers>

export let store=createStore(reducers,applyMiddleware(thunkMiddleware))