import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auth endpoints
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getCurrentUser: () => api.get('/auth/me'),
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};

// Faculty endpoints (when implemented)
export const facultyAPI = {
  getProfile: () => api.get('/faculty/profile'),
  updateProfile: (data) => api.put('/faculty/profile', data),
  getPublications: () => api.get('/faculty/publications'),
  addPublication: (data) => api.post('/faculty/publications', data),
};

// Admin endpoints (when implemented)
export const adminAPI = {
  getUsers: () => api.get('/admin/users'),
  getStats: () => api.get('/admin/stats'),
  updateUserStatus: (userId, isActive) => 
    api.put(`/admin/users/${userId}/status`, { isActive }),
};

// Public endpoints
export const publicAPI = {
  getFaculty: () => api.get('/public/faculty'),
  getDepartments: () => api.get('/public/departments'),
  getPublications: () => api.get('/public/publications'),
};

export default api;