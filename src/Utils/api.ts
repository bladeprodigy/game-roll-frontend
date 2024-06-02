import axios from 'axios';

export function createAPI() {
    const token = localStorage.getItem('jwt');

    return axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}