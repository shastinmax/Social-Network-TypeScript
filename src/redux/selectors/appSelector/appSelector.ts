import {AppStateType} from "../../redux-store";

export const selectIsApp = (state: AppStateType):boolean => state.app.initialized
