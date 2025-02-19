import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptors
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token geçersiz veya süresi dolmuş
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const profileService = {
  getProfile: () => axios.get(`${API_URL}/profile`),
  getFriends: () => axios.get(`${API_URL}/friends`),
  getPosts: () => axios.get(`${API_URL}/posts`),
};

export const favouritesService = {
  getFavourites: () => axios.get(`${API_URL}/favourites`),
  getFilters: () => axios.get(`${API_URL}/filters`),
  getLists: () => axios.get(`${API_URL}/lists`),
};

export const homeService = {
  getEvents: () => axios.get(`${API_URL}/events`),
  getNews: () => axios.get(`${API_URL}/news`),
  getCommunities: () => axios.get(`${API_URL}/communities`),
};

export const layoutService = {
  getHeader: () => axios.get(`${API_URL}/header`),
  getSidebar: () => axios.get(`${API_URL}/sidebar`),
};

export default api; 