import axios from '../config/axios';

export const getCartItem = async (id) => {
    return await axios.get(`/carts/${id}`);
};

export const deleteCartItems = async (id) => {
    return await axios.delete('/carts');
};

export const createCart = async (id, amount, price) => {
    return await axios.post(`/carts/${id}`, {
        amount,
        price,
    });
};

export const createCharge = async (email, description, card, amount) => {
    return await axios.post('/charge', {
        email,
        description,
        card,
        amount,
    });
};
