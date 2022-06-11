import {initializeSuccess} from "../../actionCreators/app/AppAC";
import {getAuthUserData} from "../auth/getAuthUserData";

export const initializeApp = () => (dispatch: any) => {
    dispatch(getAuthUserData())
        .then(() => {
            dispatch(initializeSuccess())
        })
}