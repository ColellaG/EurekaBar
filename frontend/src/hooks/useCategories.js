import { useState, useEffect } from 'react';
import { getCategories } from '../services/api';

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const data = await getCategories();
        console.log('Raw categories data:', data);
        
        // Manejar tanto respuestas paginadas como no paginadas
        if (data.results && Array.isArray(data.results)) {
          setCategories(data.results);
        } else if (Array.isArray(data)) {
          setCategories(data);
        } else {
          setCategories([]);
          console.error('Formato de respuesta no esperado:', data);
        }
        
        setError(null);
      } catch (err) {
        console.error('Error al cargar categorías:', err);
        setError('Error al cargar las categorías');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}; 