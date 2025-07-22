import api from '../../lib/axios';

export const loginUser = async (credentials) => {
    const params = new URLSearchParams();
    params.append('username', credentials.email);
    params.append('password', credentials.password);

    const response = await api.post('/api/v1/auth/login', params, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return response.data;
};

export const registerUser = async (userData) => {
    const response = await api.post('/api/v1/users/', userData);
    return response.data;
};

export const fetchUserProfile = async () => {
    const response = await api.get('/api/v1/users/me');
    return response.data;
}