import axios from 'axios'
import { getLocalStorage, setLocalStorage } from './storageUtils.js'

const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
})

async function refreshToken() {
    try {
        const refreshToken = getLocalStorage('refreshToken')
        const response = await axios.post('/api/v1/refreshtoken', { refreshToken })
        const newToken = response.data.data.accessToken

        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newToken}`

        return newToken
    } catch (error) {
        throw error
    }
}

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getLocalStorage('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config

        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true

            try {
                const newToken = await refreshToken()
                setLocalStorage('token', newToken)
                originalRequest.headers['Authorization'] = `Bearer ${newToken}`
                return axiosInstance(originalRequest)
            } catch (error) {
                throw error
            }
        }
        return Promise.reject(error)
    }
)

export default axiosInstance
