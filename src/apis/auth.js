import axios from '../config/axios';

export const createUser = async (
    firstName,
    lastName,
    email,
    password,
    confirmPassword
) => {
    return await axios.post('/auth/register', {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    });
};

export const loginFacebook = async (response) => {
    return await axios.post('/auth/loginfb', { response });
};

export const defaultLogin = async (email, password) => {
    return await axios.post('/auth/login', { email, password });
};
