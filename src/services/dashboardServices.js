import axios from 'axios'
import { SET_TOTAL_DATA } from '../constants/actionTypes'
import axiosInstance from '../utils/axiosInstance';

const getAll = async (dispatch) => {
    try {
        const responseCampsite = await axiosInstance.get('api/v1/campsite')
        const responseOrder = await axiosInstance.get(`api/v1/order`)
        const responseUser = await axiosInstance.get('api/v1/user')
        dispatch({
            type: SET_TOTAL_DATA,
            totalCampsite: responseCampsite?.data?.data?.totalElements,
            totalOrder: responseOrder?.data?.data?.totalElements,
            totalUser: responseUser?.data?.data?.totalElements,
        })
    } catch (error) {
        console.log('error', error)
    }
}

export default { getAll }
