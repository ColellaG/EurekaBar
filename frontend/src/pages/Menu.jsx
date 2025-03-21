import React, { useState, useEffect } from 'react';
import { useCategories } from '../hooks/useCategories';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from '../components/ProductCard';
import { Spinner } from '../components/Spinner';

const categoryDescriptions = {
  'SANDWICHES': 'Deliciosas opciones de sandwiches preparados con pan artesanal',
  'SMOOTHIES': 'Bebidas refrescantes y saludables hechas con frutas naturales',
  'JUGOS': 'Jugos naturales exprimidos al momento',
  'TOSTADOS': 'Tostados calientes y crujientes con rellenos variados',
  'BEBIDAS': 'Selección de bebidas frías y calientes para acompañar tu comida',
  'TENTACIONES': 'Dulces y postres para darte un gusto especial',
  'DELICIAS SIN TACC': 'Opciones deliciosas libres de gluten',
  'CAFETERÍA': 'Especialidades de café preparadas por nuestros baristas',
  'DESAYUNOS & MERIENDAS': 'Opciones completas para empezar tu día o disfrutar por la tarde'
};

export function Menu() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const { categories, loading: isLoadingCategories, error: errorCategories } = useCategories();
  const { products, loading: isLoadingProducts, error: errorProducts } = useProducts();

  useEffect(() => {
    // Expandir la primera categoría automáticamente cuando se cargan
    if (categories && categories.length > 0 && !expandedCategory) {
      setExpandedCategory(categories[0].id);
    }
    
    console.log('Categories:', categories);
    console.log('Products:', products);
  }, [categories, products, expandedCategory]);

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  if (isLoadingCategories || isLoadingProducts) {
    return <Spinner />;
  }

  if (errorCategories || errorProducts) {
    return (
      <div className="alert alert-danger" role="alert">
        Error al cargar el menú: {errorCategories || errorProducts}
      </div>
    );
  }
  
  if (!categories || categories.length === 0) {
    return (
      <div className="alert alert-warning">
        No se encontraron categorías. Por favor, intenta nuevamente más tarde.
      </div>
    );
  }

  // Agrupar productos por categoría
  const productsByCategory = {};
  categories.forEach(category => {
    productsByCategory[category.id] = products.filter(
      product => product.category === category.id
    );
  });
  
  // Si no hay productos después de cargar, mostrar advertencia
  if (products.length === 0) {
    return (
      <div className="alert alert-warning">
        No se encontraron productos. Por favor, intenta nuevamente más tarde.
      </div>
    );
  }

  return (
    <>
      <header className="menu-header text-center">
        <div className="container">
          <h1>Nuestro Menú</h1>
          <p className="lead">Descubre nuestra variedad de opciones preparadas con ingredientes frescos</p>
        </div>
      </header>
      
      <main className="container py-4">
        <div className="accordion">
          {categories.map((category) => {
            const categoryProducts = productsByCategory[category.id] || [];
            const isExpanded = expandedCategory === category.id;
            
            return (
              <div key={category.id} className="accordion-item mb-3">
                <h2 className="accordion-header">
                  <button 
                    className={`accordion-button ${!isExpanded ? 'collapsed' : ''}`}
                    type="button"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <span className="category-title">{category.name}</span>
                    {category.description && (
                      <span className="text-muted d-none d-md-block ms-2">
                        {category.description}
                      </span>
                    )}
                  </button>
                </h2>
                <div 
                  className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`}
                >
                  <div className="accordion-body p-0">
                    <div className="product-list">
                      {categoryProducts.length > 0 ? (
                        categoryProducts.map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))
                      ) : (
                        <p className="text-muted p-3">No hay productos disponibles en esta categoría</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
} 