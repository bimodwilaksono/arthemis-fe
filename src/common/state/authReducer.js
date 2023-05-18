import { LOGIN, LOGOUT, REGISTER } from "../../constants/actionTypes";
import { getToken } from "../../utils/token";

const token = getToken();
const initialState = {
    token: token,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                token: action.data,
            };
        case LOGOUT:
            return {
                ...state,
                token: action.data,
            };
        case REGISTER:
            return {
                ...state,
                token: action.data,
            };  
        default:
            return {
                ...initialState,
            };
    }
}
