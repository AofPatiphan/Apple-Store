import axios from '../config/axios';

export const getProductById = async (id) => {
    return await axios.get(`/products/${id}`);
};
