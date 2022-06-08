import {AppStateType} from "../../redux-store";

export const selectIsAuth = (state: AppStateType): boolean => state.auth.isAuth
export const selectCaptchaUrl = (state: AppStateType): string | null => state.auth.captchaUrl;
export const selectIdAuth = (state: AppStateType): string | undefined => state.auth.id;
export const selectLogin = (state: AppStateType): string | null => state.auth.login;