import { ADD_NEW_ORDER, SET_ORDER_DATA, SET_ORDER_PAYLOAD, SET_TOTAL_PAGE } from '../../../constants/actionTypes';

const initialState = {
    orderList: [],
    payload: {},
    totalPages: 1
}

export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ORDER_DATA:
            return {
                ...state,
                orderList: action.data,
            }
        case ADD_NEW_ORDER:
            return {
                ...state,
                orderList: [...state.tables, action?.payload],
            }
        case SET_ORDER_PAYLOAD:
            return {
                ...state,
                payload: action.data,
            }
        case SET_TOTAL_PAGE:
            return {
                ...state,
                totalPages: action.data,
            }
        default:
            return {
                ...initialState,
            }
    }
}