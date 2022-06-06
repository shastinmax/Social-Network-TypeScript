import {instance} from "../config";
import {ProfilePropsType} from "../../components/Profile/ProfileContainer";
import {PathProfileEndpoint} from "../../enums/Profile_Endpoints";

export const profileApi = {
    getProfile(userId: number) {
        return instance.get(`${PathProfileEndpoint.PROFILE}${userId}` )
    },
    getStatus(userId: number) {
        return instance.get(`${PathProfileEndpoint.PROFILE_STATUS}${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`${PathProfileEndpoint.PROFILE_STATUS}`, {status})
    },
    savePhoto(photoFile: string) {
        let formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`${PathProfileEndpoint.PROFILE_PHOTO}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfilePropsType) {

        return instance.put(`${PathProfileEndpoint.PROFILE}`, profile)
    }
}