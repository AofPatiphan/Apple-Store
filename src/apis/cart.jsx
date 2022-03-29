import axios from '../config/axios';

export const deleteCartItems = async (id) => {
    return await axios.delete('/carts/' + id);
};
