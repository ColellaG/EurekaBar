import React from 'react';
import { useCategories } from '../hooks/useCategories';

const CategoryList = ({ onSelectCategory, selectedCategory }) => {
  const { categories, loading, error } = useCategories();

  if (loading) return <div className="text-center">Cargando categorías...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="list-group mb-4">
      <button
        className={`list-group-item list-group-item-action ${!selectedCategory ? 'active' : ''}`}
        onClick={() => onSelectCategory(null)}
      >
        Todas las categorías
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          className={`list-group-item list-group-item-action ${selectedCategory === category.id ? 'active' : ''}`}
          onClick={() => onSelectCategory(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryList; 