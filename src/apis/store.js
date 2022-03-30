import axios from '../config/axios';

export const getProduct = async () => {
    return await axios.get('/products');
};
