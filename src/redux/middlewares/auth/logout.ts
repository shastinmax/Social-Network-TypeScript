import {Dispatch} from "redux";
import {authApi} from "../../../api/auth";
import {setAuthUserData} from "../../actionCreators/auth/AuthAC";

export const logoutTC = () => async (dispatch: Dispatch) => {
    let response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(undefined, null, null, false))
    }
}