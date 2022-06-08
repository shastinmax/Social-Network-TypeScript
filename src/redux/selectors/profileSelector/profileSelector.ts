import {AppStateType} from "../../redux-store";
import {RouteType} from "../../profile-reducer";
import {ProfilePropsType} from "../../../components/Profile/ProfileContainer";

export const selectPosts = (state: AppStateType):RouteType[] => state.profilePage.posts
export const selectStatus = (state: AppStateType):string => state.profilePage.status
export const selectProfile = (state: AppStateType):ProfilePropsType | null => state.profilePage.profile