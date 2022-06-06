import {instance} from "../config";

export const authApi = {
    getMe() {
        return instance.get('auth/me')
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete('auth/login')
    }
}