import jwtDecode from 'jwt-decode';
const TOKEN = 'token';
const setToken = (token) => localStorage.setItem(TOKEN, token);
const getToken = () => localStorage.getItem(TOKEN);
const removeToken = () => localStorage.removeItem(TOKEN);

const getRole = () => {
    if (getToken()) {
        const token = getToken('token');
        const role = jwtDecode(token).role;
        return role;
    }
    return 'guest';
};

export { setToken, getToken, removeToken, getRole };
