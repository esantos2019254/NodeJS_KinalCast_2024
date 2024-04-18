import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/twitch/v1',
    timeout: 1000
});

export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}