import { useState, useEffect } from 'react';
import { getProducts } from '../services/api';

export const useProducts = (categoryId = null) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const productList = await getProducts(categoryId);
        
        if (isMounted) {
          console.log('Fetched products:', productList);
          setProducts(productList);
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        if (isMounted) {
          setError(err.message || 'Error al cargar los productos');
          setProducts([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, [categoryId]);

  return { products, loading, error };
}; 