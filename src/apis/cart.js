import axios from '../config/axios';

export const getCartItem = async () => {
    return await axios.get(`/carts`);
};

export const deleteAllCart = async () => {
    return await axios.delete(`/carts`);
};

export const deleteCartItems = async (id) => {
    try {
        const res = await axios.delete(`/carts/${id}`);
        return res;
    } catch (err) {
        console.log(err);
    }
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

export const updateCart = async (id, amount) => {
    return await axios.patch(`/carts/${id}`, { amount });
};
