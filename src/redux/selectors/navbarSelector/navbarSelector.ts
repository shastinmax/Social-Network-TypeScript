import {AppStateType} from "../../redux-store";
import {NavbarRoutesType} from "../../navbar-reducer";

export const selectNavbar = (state: AppStateType): NavbarRoutesType[] => state.navbar.routes
