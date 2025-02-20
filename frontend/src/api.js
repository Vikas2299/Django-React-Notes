import axios from 'axios'
import { ACCESS_TOKEN } from './constants'

const apiURL = 'https://de710891-ec5d-4778-9ae9-6464aa1f3a11-dev.e1-us-east-azure.choreoapis.dev/djangoreactnotes/backend/v1';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiURL,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api