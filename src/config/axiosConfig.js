// src/axiosConfig.js
import axios from 'axios';
import Router from 'next/router';

const api = axios.create({
  baseURL: 'https://uol-backend.vercel.app',
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      alert('Token inválido');
      Router.push('/login');
    }
    return Promise.reject(error);
  }
);

export default api;
