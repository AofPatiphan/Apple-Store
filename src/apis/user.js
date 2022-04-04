import axios from '../config/axios';

export const getUserData = async () => {
    return await axios.get('/users');
};

export const updateUserData = async (address, phoneNumber) => {
    return await axios.patch('/users', { address, phoneNumber });
};
