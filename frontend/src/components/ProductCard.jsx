import React from 'react';

export const ProductCard = ({ product }) => {
  return (
    <div className="product-card p-3">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h5 className="product-name">{product.name}</h5>
          {product.description && (
            <p className="product-description mb-2">{product.description}</p>
          )}
          {product.additional_info && (
            <p className="additional-info mb-2">{product.additional_info}</p>
          )}
          {product.ingredients && (
            <p className="additional-info mb-2">{product.ingredients}</p>
          )}
        </div>
        <div className="product-price">
          ${new Intl.NumberFormat('es-AR').format(product.price)}
        </div>
      </div>
      {!product.is_available && (
        <div className="alert alert-warning mt-2 mb-0 py-1" role="alert">
          No disponible
        </div>
      )}
    </div>
  );
}; 