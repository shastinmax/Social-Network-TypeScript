export const setAuthUserData = (id: string | undefined, email: string | null, login: string | null, isAuth: boolean,) => {
    return {
        type: 'AUTH/SET-USER-DATA',
        payload: {
            id, email, login, isAuth,
        }
    } as const
}
export const getCaptchaUrlSuccess = (captchaUrl: string | null) => {
    return {
        type: 'GET-CAPTCHA-URL',
        payload: {captchaUrl}
    } as const
}