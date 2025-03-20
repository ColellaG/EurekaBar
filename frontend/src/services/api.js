import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCategories = async () => {
  const response = await api.get('/categories/');
  return response.data;
};

export const getProducts = async (categoryId = null) => {
  let allProducts = [];
  let currentPage = 1;
  const params = categoryId ? { category: categoryId, page: currentPage } : { page: currentPage };

  try {
    while (true) {
      const response = await api.get('/products/', { params });
      const data = response.data;
      allProducts = [...allProducts, ...data.results];
      
      if (!data.next) {
        break;
      }
      
      currentPage += 1;
      params.page = currentPage;
    }

    return allProducts;
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