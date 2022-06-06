import {instance} from "../config";
import {PathSecurityEndpoint} from "../../enums/Security_Endpoints";

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`${PathSecurityEndpoint.SECURITY_GET_CAPTCHA_URL}`)
    }
}