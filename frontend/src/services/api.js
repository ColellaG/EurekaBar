import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// Crear una instancia de Axios con la configuración base
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Interceptor para manejar errores
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // Verificar si es un error de CORS o red
    if (error.message === 'Network Error') {
      console.error('Error de red posiblemente debido a CORS. Verifica la configuración del servidor.');
      console.error('URL solicitada:', error.config.url);
      console.error('Método:', error.config.method);
    }
    return Promise.reject(error);
  }
);

export const getCategories = async () => {
  try {
    const response = await axiosInstance.get('/categories/');
    console.log('Respuesta de categorías:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    throw new Error('No se pudieron cargar las categorías');
  }
};

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get('/products/');
    console.log('Respuesta de productos:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw new Error('No se pudieron cargar los productos');
  }
};

export const getProduct = async (id) => {
  const response = await axiosInstance.get(`/products/${id}/`);
  return response.data;
};

export const createProduct = async (productData) => {
  try {
    const response = await axiosInstance.post('/products/', productData);
    return response.data;
  } catch (error) {
    console.error('Error al crear producto:', error);
    throw new Error(error.response?.data?.detail || 'No se pudo crear el producto');
  }
};

export const updateProduct = async (productId, productData) => {
  try {
    const response = await axiosInstance.put(`/products/${productId}/`, productData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    throw new Error(error.response?.data?.detail || 'No se pudo actualizar el producto');
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await axiosInstance.delete(`/products/${productId}/`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    throw new Error(error.response?.data?.detail || 'No se pudo eliminar el producto');
  }
};

export const createCategory = async (categoryData) => {
  const response = await axiosInstance.post('/categories/', categoryData);
  return response.data;
};

export const updateCategory = async (id, categoryData) => {
  const response = await axiosInstance.put(`/categories/${id}/`, categoryData);
  return response.data;
};

export const deleteCategory = async (id) => {
  await axiosInstance.delete(`/categories/${id}/`);
};

export default axiosInstance; 