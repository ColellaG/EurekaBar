import axios from 'axios';

// Obtener la URL base de la API desde variables de entorno o usar localhost por defecto
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// Crear una instancia de axios con la configuración necesaria
const api = axios.create({
  baseURL,
  withCredentials: false, // No enviamos cookies para evitar problemas CORS
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

// Interceptor para manejar errores
api.interceptors.response.use(
  response => response,
  error => {
    // Si hay un error CORS, lo manejamos mejor
    if (error.message === 'Network Error') {
      console.error('Error de CORS o red:', error);
      console.log('Attempting to access API at:', baseURL);
    }
    return Promise.reject(error);
  }
);

export const getCategories = async () => {
  try {
    const response = await api.get('/categories/');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const response = await api.get('/products/');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProduct = async (id) => {
  const response = await api.get(`/products/${id}/`);
  return response.data;
};

export const createProduct = async (productData) => {
  const response = await api.post('/products/', productData);
  return response.data;
};

export const updateProduct = async (id, productData) => {
  const response = await api.put(`/products/${id}/`, productData);
  return response.data;
};

export const deleteProduct = async (id) => {
  await api.delete(`/products/${id}/`);
};

export const createCategory = async (categoryData) => {
  const response = await api.post('/categories/', categoryData);
  return response.data;
};

export const updateCategory = async (id, categoryData) => {
  const response = await api.put(`/categories/${id}/`, categoryData);
  return response.data;
};

export const deleteCategory = async (id) => {
  await api.delete(`/categories/${id}/`);
};

export default api; 