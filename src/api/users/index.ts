import {instance} from "../config";
import {profileApi} from "../profile";
import {PathUsersEndpoint} from "../../enums/Users_Endpoints";

export const usersApi = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete(`${PathUsersEndpoint.FOLLOW}${userId}`)
    },
    follow(userId: number) {
        return instance.post(`${PathUsersEndpoint.FOLLOW}${userId}`)
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please profileAPI object')
        return profileApi.getProfile(userId)
    },
}

export const getUsers2 = (currentPage: number = 1, pageSize: number = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`,).then(response => response.data)
}