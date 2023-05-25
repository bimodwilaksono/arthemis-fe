import {
    ADD_NEW_USER,
    DELETE_USER,
    SET_TOTAL_PAGE,
    SET_USER_DATA,
    SET_USER_PAYLOAD,
    UPDATE_USER_DATA,
} from '../../../constants/actionTypes'

const initialPayload = {
    id: '',
    name: '',
    email: '',
    role: '',
}
const initialState = {
    userList: [],
    payload: {
        id: '',
        name: '',
        email: '',
        role: '',
    },
    totalPages: 1,
}

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userList: action.data,
            }
        case ADD_NEW_USER:
            return {
                ...state,
                userList: [...state.tables, action?.payload],
            }
        case SET_USER_PAYLOAD:
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
