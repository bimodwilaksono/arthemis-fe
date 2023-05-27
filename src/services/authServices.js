import { LOGIN, LOGOUT, REGISTER } from '../constants/actionTypes'
import axiosInstance from '../utils/axiosInstance'
import { removeToken, setToken } from '../utils/token'

export const login = (dispatch, { email, password }, callback) => {
    axiosInstance
        .post('/api/v1/login-admin', { email, password })
        .then((response) => {
            console.log('response', response.data.data)
            if (response.data) {
                const token = response.data.data
                setToken(token)
                dispatch({ type: LOGIN, data: token })
                callback()
            }
        })
        .catch((err) => {})
}

export const logout = (dispatch) => {
    dispatch({ type: LOGOUT, data: null })
    removeToken()
}

export const register = (dispatch, { name, email, password }, callback) => {
    axiosInstance
        .post('/api/v1/register', { name, email, password })
        .then((response) => {
            if (response.data) {
                const token = response.data.data
                setToken(token)
                callback()
                dispatch({ type: REGISTER, data: token })
            }
        })
        .catch((err) => setToken(null))
}

export default { login, logout, register }
