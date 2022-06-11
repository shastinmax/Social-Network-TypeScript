import {Dispatch} from "redux";
import {authApi} from "../../../api/auth";
import {setAuthUserData} from "../../actionCreators/auth/AuthAC";

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authApi.getMe()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}