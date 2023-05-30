import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8080/api';
const token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : localStorage.getItem('token') || '';

// Set Headers
const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
});

// Auth
export const login = (dataLogin) => {
    return axios.post(`${API_BASE_URL}/login`, dataLogin);
}

export const register = (dataRegister) => {
    return axios.post(`${API_BASE_URL}/register`, dataRegister);
}

// User
export const fetchUsers = (userId) => {
  return instance.post(`${API_BASE_URL}/list-user`, userId);
};

export const createUser = (userData) => {
  return instance.post(`${API_BASE_URL}/users`, userData);
};

export const deleteUser = (userId) => {
  return instance.delete(`${API_BASE_URL}/users/${userId}`);
};

// Friend
export const fetchFriend = () => {
    return instance.get(`${API_BASE_URL}/friends/{friendId}`);
};

