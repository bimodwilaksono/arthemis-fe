import { ADD_NEW_CAMP, SET_CAMP_DATA, SET_CAMP_PAYLOAD, SET_TOTAL_PAGE } from '../../../constants/actionTypes';

const initialState = {
    campList: [],
    payload: {},
    totalPages: 1,
}

export default function campsiteReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CAMP_DATA:
            return {
                ...state,
                campList: action.data,
            }
        case ADD_NEW_CAMP:
            return {
                ...state,
                campList: [...state.campList, action?.payload],
            }
        case SET_CAMP_PAYLOAD:
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
