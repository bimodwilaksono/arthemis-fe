import { SET_TOTAL_PAGE, SET_USER_DATA, SET_USER_PAYLOAD } from '../constants/actionTypes'
import axiosInstance from '../utils/axiosInstance'

const getAll = (dispatch) => {
    axiosInstance
        .get('/api/v1/user')
        .then((response) => {
            if (response.status === 201 || response.status === 200) {
                const { content, totalPages } = response.data.data
                dispatch({
                    type: SET_USER_DATA,
                    data: content,
                })
                dispatch({
                    type: SET_TOTAL_PAGE,
                    data: totalPages,
                })
            }
        })
        .catch((error) => console.error(error))
}

const updateById = async (dispatch, payload, callback) => {
    const { id } = payload
    try {
        await axiosInstance.put(`/api/v1/user-role`, { userId: id, newRole: payload.role })
        await axiosInstance.patch(`/api/v1/user/update-email/${id}`, { name: payload.name, email: payload.email })
        getAll(dispatch)
        callback()
    } catch (error) {}
}

const getById = (dispatch, id, callback) => {
    axiosInstance.get(`/api/v1/user/${id}`).then((response) => {
        dispatch({
            type: SET_USER_PAYLOAD,
            data: response.data.data,
        })
        callback()
    })
}

const deleteById = async (id) => {
    try {
        await axiosInstance.delete(`/api/v1/user/${id}`)
        getAll()
    } catch (error) {}
}

export default { getAll, updateById, getById, deleteById }
