import authServices from "../../services/authServices";

export function login({ email, password }, callback) {
    return function (dispatch) {
        authServices.login(dispatch, { email, password }, callback);
    };
}

export function logout() {
    return function (dispatch) {
        authServices.logout(dispatch);
    };
}

export function register({ name, email, password }, callback) {
    return function (dispatch) {
        authServices.register(dispatch, { name, email, password }, callback);
    };
}
