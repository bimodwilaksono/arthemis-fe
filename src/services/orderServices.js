import { SET_ORDER_DATA, SET_ORDER_PAYLOAD, SET_TOTAL_PAGE } from '../constants/actionTypes'
import axiosInstance from '../utils/axiosInstance'

const getAll = (dispatch, page) => {
    axiosInstance
        .get(`/api/v1/order?page=${page}`)
        .then((response) => {
            if (response.status === 201 || response.status === 200) {
                const { content, totalPages } = response.data.data
                dispatch({
                    type: SET_ORDER_DATA,
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

const updateById = async (dispatch, id, payload, callback, page) => {
    try {
        await axiosInstance.put(`/api/v1/order/status/${id}`, payload)
        getAll(dispatch, page)
        callback()
    } catch (error) {}
}

const getById = (dispatch, id, callback) => {
    axiosInstance
        .get(`/api/v1/order/${id}`)
        .then((response) => {
            dispatch({
                type: SET_ORDER_PAYLOAD,
                data: response.data.data,
            })
            callback()
        })
        .catch((error) => console.log(error))
}

// const deleteById = async (id, dispatch) => {
//     try {
//         await axiosInstance.delete(`/api/v1/user/${id}`)
//         getAll(dispatch)
//     } catch (error) {}
// }

export default { getAll, getById, updateById }
