import React, { useEffect } from 'react';
import { useCategories } from '../hooks/useCategories';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from '../components/ProductCard';
import { Spinner } from '../components/Spinner';

const categoryDescriptions = {
  'Sandwiches': 'Deliciosas opciones de sandwiches preparados con pan artesanal',
  'Smoothies': 'Bebidas refrescantes y saludables hechas con frutas naturales',
  'Jugos': 'Jugos naturales exprimidos al momento',
  'Tostados': 'Tostados calientes y crujientes con rellenos variados',
  'Bebidas': 'Selección de bebidas frías y calientes para acompañar tu comida',
  'Tentaciones': 'Dulces y postres para darte un gusto especial',
  'Delicias Sin TACC': 'Opciones deliciosas libres de gluten',
  'Cafetería': 'Especialidades de café preparadas por nuestros baristas',
  'Desayunos & Meriendas': 'Opciones completas para empezar tu día o disfrutar por la tarde'
};

export function Menu() {
  const { categories, loading: isLoadingCategories, error: errorCategories } = useCategories();
  const { products, loading: isLoadingProducts, error: errorProducts } = useProducts();

  useEffect(() => {
    console.log('Categories:', categories);
    console.log('Products:', products);
  }, [categories, products]);

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

  // Agrupar productos por categoría
  const productsByCategory = {};
  categories.forEach(category => {
    productsByCategory[category.id] = products.filter(
      product => product.category === category.id
    );
  });

  return (
    <>
      <header className="menu-header text-center">
        <div className="container">
          <h1>Casa Eureka</h1>
          <p className="lead">Descubre nuestra selección de platos y bebidas preparados con amor</p>
        </div>
      </header>

      <main className="container py-5">
        <div className="accordion" id="menuAccordion">
          {categories.map((category, index) => {
            const categoryProducts = productsByCategory[category.id] || [];
            const isFirstCategory = index === 0;
            
            return (
              <div className="accordion-item category-section mb-3" key={category.id}>
                <h2 className="accordion-header" id={`heading${category.id}`}>
                  <button
                    className={`accordion-button ${!isFirstCategory ? 'collapsed' : ''}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${category.id}`}
                    aria-expanded={isFirstCategory}
                    aria-controls={`collapse${category.id}`}
                  >
                    <div>
                      <span className="category-title h5 mb-0">{category.name}</span>
                      <small className="d-block text-muted">{categoryDescriptions[category.name]}</small>
                    </div>
                  </button>
                </h2>
                
                <div
                  id={`collapse${category.id}`}
                  className={`accordion-collapse collapse ${isFirstCategory ? 'show' : ''}`}
                  aria-labelledby={`heading${category.id}`}
                  data-bs-parent="#menuAccordion"
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