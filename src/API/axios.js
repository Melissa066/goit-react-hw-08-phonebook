// src/api/axios.js
import axios from 'axios';

// Base URL for the API
const API_URL = 'https://connections-api.goit.global';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor to attach JWT token to requests
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
