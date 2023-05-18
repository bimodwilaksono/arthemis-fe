import { LOGIN, LOGOUT, REGISTER } from "../constants/actionTypes";
import axiosInstance from "../utils/axiosInstance";
import { removeToken, setToken } from "../utils/token";

export const login = (dispatch, { email, password }, callback) => {
    axiosInstance
        .post("/api/auth/login", { email, password })
        .then((response) => {
            if (response.data) {
                const { token } = response.data;
                setToken(token);
                callback();
                dispatch({ type: LOGIN, data: token });
            }
        })
        .catch((err) => setToken(null));
};

export const logout = (dispatch) => {
    dispatch({ type: LOGOUT, data: null });
    removeToken();
};

export const register = (dispatch, { name, email, password }, callback) => {
    axiosInstance
        .post("/api/auth/register", { name, email, password })
        .then((response) => {
            if (response.data) {
                const { token } = response.data;
                setToken(token);
                callback();
                dispatch({ type: REGISTER, data: token });
            }
        })
        .catch((err) => setToken(null));
};

export default { login, logout };
