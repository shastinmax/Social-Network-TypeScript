import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../redux-store";
import {FormAction, stopSubmit} from "redux-form";
import {authApi} from "../../../api/auth";
import {getAuthUserData} from "./getAuthUserData";
import {getCaptchaUrl} from "./getCapthaUrl";

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => {
    return async (dispatch: ThunkDispatch<AppStateType, unknown, FormAction>) => {
        try {
            const response = await authApi.login(email, password, rememberMe, captcha);
            if (response.data.resultCode === 0) {
                await dispatch(getAuthUserData());
            } else {
                if (response.data.resultCode === 10) {
                    await dispatch(getCaptchaUrl());
                } else {
                    const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error. Please reload page";
                    dispatch(stopSubmit("login", {_error: message}));
                }
            }
        } catch (error) {
            console.log(`Error login. ${error}`);
        }
    }
}