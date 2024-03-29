import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b365fbe8-0446-4f2a-ad5f-3c9421879b5e'
    }
})

export const usersAPI = {
    getUsers: (currentPage, pageSize) => {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    unfollow: (userId) => {

        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    follow: (userId) => {


        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getProfile: (userId) => {

        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile: (userId) => {

        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus: (status: string) => {
        return instance.put('profile/status', {status})
            .then(response => {
                return response.data
            })

    }

}

export const authAPI = {

    me: () => {
        return instance.get(`auth/me`)
        .then(response => {
            return response.data
        });
    }
}

