import {AppStateType} from "../../redux-store";
import {DialogType, PostsType} from "../../dialogs-reducer";

export const selectDialogs = (state: AppStateType):PostsType[] => state.dialogsPage.dialogs
export const selectMessages = (state: AppStateType):DialogType[] => state.dialogsPage.messages