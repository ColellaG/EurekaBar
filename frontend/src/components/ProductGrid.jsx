import React from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from './ProductCard';

const ProductGrid = ({ categoryId }) => {
  const { products, loading, error } = useProducts(categoryId);

  if (loading) return <div className="text-center">Cargando productos...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {products.map((product) => (
        <div key={product.id} className="col">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid; 