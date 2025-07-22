import api from '../../lib/axios';

export const fetchItems = async () => {
    const response = await api.get('/api/v1/items/');
    return response.data;
};

export const fetchItemById = async (id) => {
    const response = await api.get(`/api/v1/items/${id}`);
    return response.data;
};