import axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {
    return axios.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    }).then(response => response.data)
}

export const getUsers2 = (currentPage: number = 1, pageSize: number = 10) => {
    return axios.get(baseUrl + `follow?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    }).then(response => response.data)
}

