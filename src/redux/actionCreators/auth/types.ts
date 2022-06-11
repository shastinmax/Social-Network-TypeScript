import {getCaptchaUrlSuccess, setAuthUserData} from "./AuthAC";

export type GeneralType = SetUserDataType | GetCaptchaUrlType
type SetUserDataType = ReturnType<typeof setAuthUserData>
type GetCaptchaUrlType = ReturnType<typeof getCaptchaUrlSuccess>