import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': "1be3afd1-cb12-4713-953a-273c84cfad9b"
    }
})

export const usersApi = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
}
export const authApi = {
    getMe() {
        console.log('in getMe')
       return instance.get('auth/me')
    }
}

export const getUsers2 = (currentPage: number = 1, pageSize: number = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`,).then(response => response.data)
}

