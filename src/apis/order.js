import axios from '../config/axios';

export const getOrder = async () => {
    return await axios.get(`/orders`);
};
export const createOrder = async (status) => {
    return await axios.post('/orders', { status });
};

export const createOrderItem = async (orderId) => {
    return await axios.post(`/orders/${orderId}`);
};

export const deleteOrder = async (orderId) => {
    return await axios.delete(`/orders/${orderId}`);
};

export const deleteOrderItem = async (itemId) => {
    return await axios.delete(`/orders/orderitem/${itemId}`);
};

export const updateOrderItem = async (id, productId, amount, price) => {
    return await axios.patch(`/orders/${id}`, { productId, amount, price });
};
