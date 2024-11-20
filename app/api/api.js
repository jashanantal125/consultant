import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://65.0.52.105:8006/api/method', // Base API URL
  headers: {
    Accept: 'application/json',
  },
});

// Request interceptor to attach token if available
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token'); // Replace 'token' with your storage key if needed
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error); // Let individual requests handle the error
  }
);

export default api;
