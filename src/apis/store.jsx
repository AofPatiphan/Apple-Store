import axios from '../config/axios';

export const getProduct = async () => {
    return await axios.get('/products');
};

// export const addCartItems = async productId => {
// 	return await axios.post("/cart/" + productId);
// };

// export const updateCartItems = async (id, amount) => {
// 	return await axios.put("/cart/" + id, { amount });
// };

// export const deleteCartItems = async id => {
// 	return await axios.delete("/cart/" + id);
// };

// export const emptyCartItems = async () => {
// 	return await axios.delete("/carts/clear");
// };
