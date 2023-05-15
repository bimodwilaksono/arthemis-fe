const TOKEN = "token";

export const getToken = () => {
    const data = localStorage.getItem(TOKEN);
    try {
        return JSON.parse(data);
    } catch (e) {
        return data;
    }
};

export const setToken = (token) => {
    localStorage.setItem(TOKEN, JSON.stringify(token));
}

export const removeToken = () => {
    localStorage.removeItem(TOKEN);
}