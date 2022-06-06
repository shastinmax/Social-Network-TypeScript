import {instance} from "../config";
import {PathAuthEndpoint} from "../../enums/Auth_Endpoints";

export const authApi = {
    getMe() {
        return instance.get(`${PathAuthEndpoint.AUTH_ME}`)
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string) {
        return instance.post(`${PathAuthEndpoint.AUTH_LOGIN}`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`${PathAuthEndpoint.AUTH_LOGIN}`)
    }
}