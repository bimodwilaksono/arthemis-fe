import axios from "axios";
import {getToken, removeToken} from "./token.js";

const axiosInstance = axios.create({
    headers : {
        "Content-Type" : "application/json"
    }
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken();
        if(token){
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const data = error?.response?.data;
        if(data.code === 401){
            removeToken();
        }
        return Promise.reject(error);
    }
)

export default axiosInstance