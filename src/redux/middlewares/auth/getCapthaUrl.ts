import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../redux-store";
import {securityAPI} from "../../../api/security";
import {getCaptchaUrlSuccess} from "../../actionCreators/auth/AuthAC";
import { GeneralType } from "../../actionCreators/auth/types";

export const getCaptchaUrl = () => {
    return async (dispatch: ThunkDispatch<AppStateType, unknown, GeneralType>) => {
        try {
            const response = await securityAPI.getCaptchaUrl();
            const captchaUrl = response.data.url;
            dispatch(getCaptchaUrlSuccess(captchaUrl));
        } catch (error) {
            console.log(`Error getting captcha image url. ${error}`);
        }
    }
}