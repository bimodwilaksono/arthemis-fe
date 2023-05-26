import { ADD_NEW_CAMP, SET_CAMP_DATA, SET_CAMP_PAYLOAD, SET_TOTAL_PAGE } from '../constants/actionTypes'
import axiosInstance from '../utils/axiosInstance'

const getAll = (dispatch) => {
    axiosInstance.get('api/v1/campsite').then((response) => {
        if (response.status === 200 || response.status === 201) {
            const { content, totalPages } = response.data.data
            dispatch({
                type: SET_CAMP_DATA,
                data: content,
            })
            dispatch({
                type: SET_TOTAL_PAGE,
                data: totalPages,
            })
        }
    })
}

const getById = (dispatch, id, callback) => {
    axiosInstance
        .get(`/api/v1/campsite/${id}`)
        .then((response) => {
            dispatch({
                type: SET_CAMP_PAYLOAD,
                data: response.data.data,
            })
            callback()
        })
        .catch((error) => console.log(error))
}

const updateById = async (dispatch, payload, callback) => {
    const { id } = payload
    try {
        await axiosInstance.putForm(`/api/v1/campsite/${id}`, payload)
        getAll(dispatch)
        callback()
    } catch (error) {}
}

const deleteById = async (id, dispatch) => {
    try {
        await axiosInstance.delete(`/api/v1/campsite/${id}`)
        getAll(dispatch)
    } catch (error) {}
}

const addNew = async (dispatch, payload, callback) => {
    axiosInstance
        .postForm('api/v1/campsite', payload)
        .then((response) => {
            if (response.status === 200 || response.status === 201) {
                dispatch({ type: ADD_NEW_CAMP, payload: payload })
                getAll(dispatch)
                callback()
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

export default { getAll, getById, deleteById, updateById, addNew }
