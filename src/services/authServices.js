import Swal from 'sweetalert2'
import { LOGIN, LOGOUT, REGISTER } from '../constants/actionTypes'
import axiosInstance from '../utils/axiosInstance'
import { removeLocalStorage, setLocalStorage } from '../utils/storageUtils'

export const login = (dispatch, { email, password }, callback) => {
    axiosInstance
        .post('/api/v1/login-admin', { email, password })
        .then((response) => {
            console.log('response', response.data.data)
            if (response.data) {
                const { accessToken: token, refreshToken } = response.data.data
                setLocalStorage('token', token)
                setLocalStorage('refreshToken', refreshToken)
                dispatch({ type: LOGIN, data: token })
                callback()
            }
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err?.response?.data?.message,
            })
        })
}

export const logout = (dispatch) => {
    dispatch({ type: LOGOUT, data: null })
    removeLocalStorage('token')
    removeLocalStorage('refreshToken')
}

export const register = (dispatch, { name, email, password }, callback) => {
    axiosInstance
        .post('/api/v1/register', { name, email, password })
        .then((response) => {
            if (response.data) {
                const { accessToken: token, refreshToken } = response.data.data
                setLocalStorage('token', token)
                setLocalStorage('refreshToken', refreshToken)
                callback()
                dispatch({ type: REGISTER, data: token })
            }
        })
        .catch((err) => {
            console.log('error', err)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err?.response?.data?.message,
            })
        })
}

export default { login, logout, register }
