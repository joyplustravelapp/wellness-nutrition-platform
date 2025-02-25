import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include authentication token
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage or wherever you store it
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handling, e.g., redirect to login if 401 unauthorized
    if (error.response && error.response.status === 401) {
      if (typeof window !== 'undefined') {
        // Clear auth data and redirect to login
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// API endpoints for users
export const userApi = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getProfile: () => api.get('/users/profile'),
  updateProfile: (profileData) => api.put('/users/profile', profileData),
};

// API endpoints for products
export const productApi = {
  getAll: (params) => api.get('/products', { params }),
  getById: (id) => api.get(`/products/${id}`),
  getByCategory: (category) => api.get(`/products/category/${category}`),
};

// API endpoints for orders
export const orderApi = {
  create: (orderData) => api.post('/orders', orderData),
  getAll: () => api.get('/orders'),
  getById: (id) => api.get(`/orders/${id}`),
};

// API endpoints for content
export const contentApi = {
  getAll: (params) => api.get('/content', { params }),
  getBySlug: (slug) => api.get(`/content/${slug}`),
  getByCategory: (category) => api.get(`/content/category/${category}`),
};

// API endpoints for consultations
export const consultationApi = {
  getAvailability: (params) => api.get('/consultations/availability', { params }),
  book: (consultationData) => api.post('/consultations', consultationData),
  getById: (id) => api.get(`/consultations/${id}`),
  cancel: (id) => api.delete(`/consultations/${id}`),
};

export default api;
