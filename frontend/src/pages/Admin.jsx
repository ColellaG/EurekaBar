import React, { useState, useEffect } from 'react';
import { useCategories } from '../hooks/useCategories';
import { useProducts } from '../hooks/useProducts';
import { createProduct, updateProduct, deleteProduct } from '../services/api';
import { Spinner } from '../components/Spinner';

export function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    name: '',
    description: '',
    additional_info: '',
    price: 0,
    category: null
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const { categories, loading: isLoadingCategories, error: errorCategories } = useCategories();
  const { products, loading: isLoadingProducts, error: errorProducts } = useProducts();

  // Función para autenticar al administrador
  const handleLogin = (e) => {
    e.preventDefault();
    // En producción, deberías usar un sistema de autenticación real
    if (password === 'eureka2025') {
      setIsAuthenticated(true);
      setError(null);
    } else {
      setError('Contraseña incorrecta');
    }
  };

  // Función para resetear el formulario
  const resetForm = () => {
    setCurrentProduct({
      name: '',
      description: '',
      additional_info: '',
      price: 0,
      category: selectedCategory
    });
    setIsEditing(false);
  };

  // Actualizar categoría en el producto cuando cambia la selección
  useEffect(() => {
    if (selectedCategory) {
      setCurrentProduct(prev => ({...prev, category: selectedCategory}));
    }
  }, [selectedCategory]);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (!currentProduct.name || !currentProduct.category) {
        setError('Nombre y categoría son obligatorios');
        return;
      }

      setError(null);
      
      if (isEditing && currentProduct.id) {
        await updateProduct(currentProduct.id, currentProduct);
        setSuccessMessage('Producto actualizado con éxito');
      } else {
        await createProduct(currentProduct);
        setSuccessMessage('Producto creado con éxito');
      }
      
      // Limpiar el formulario después de guardar
      resetForm();
      
      // Desaparecer el mensaje después de 3 segundos
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
      
    } catch (error) {
      setError(`Error al guardar el producto: ${error.message}`);
    }
  };

  // Función para editar un producto existente
  const handleEdit = (product) => {
    setCurrentProduct(product);
    setSelectedCategory(product.category);
    setIsEditing(true);
  };

  // Función para eliminar un producto
  const handleDelete = async (productId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      try {
        await deleteProduct(productId);
        setSuccessMessage('Producto eliminado con éxito');
        
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      } catch (error) {
        setError(`Error al eliminar el producto: ${error.message}`);
      }
    }
  };

  if (isLoadingCategories || isLoadingProducts) {
    return <Spinner />;
  }

  // Si no está autenticado, mostrar el formulario de login
  if (!isAuthenticated) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card menu-container">
              <div className="card-header">
                <h3 className="text-center">Acceso Administrador</h3>
              </div>
              <div className="card-body">
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="menu-container">
        <h1 className="mb-4">Panel de Administración</h1>
        
        {error && <div className="alert alert-danger">{error}</div>}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header">
                <h4>{isEditing ? 'Editar Producto' : 'Nuevo Producto'}</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="category" className="form-label">Categoría</label>
                    <select 
                      className="form-select" 
                      id="category"
                      value={selectedCategory || ''}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      required
                    >
                      <option value="">Seleccionar categoría</option>
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name"
                      value={currentProduct.name}
                      onChange={(e) => setCurrentProduct({...currentProduct, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descripción</label>
                    <textarea 
                      className="form-control" 
                      id="description"
                      value={currentProduct.description || ''}
                      onChange={(e) => setCurrentProduct({...currentProduct, description: e.target.value})}
                    ></textarea>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="additional_info" className="form-label">Información Adicional</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="additional_info"
                      value={currentProduct.additional_info || ''}
                      onChange={(e) => setCurrentProduct({...currentProduct, additional_info: e.target.value})}
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">Precio</label>
                    <input 
                      type="number" 
                      className="form-control" 
                      id="price"
                      value={currentProduct.price || 0}
                      onChange={(e) => setCurrentProduct({...currentProduct, price: parseFloat(e.target.value)})}
                      required
                    />
                  </div>
                  
                  <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">
                      {isEditing ? 'Actualizar' : 'Crear'}
                    </button>
                    
                    {isEditing && (
                      <button 
                        type="button" 
                        className="btn btn-secondary"
                        onClick={resetForm}
                      >
                        Cancelar
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h4>Productos</h4>
                <div className="mb-2">
                  <select 
                    className="form-select"
                    value={selectedCategory || ''}
                    onChange={(e) => setSelectedCategory(e.target.value || null)}
                  >
                    <option value="">Todos los productos</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products
                        .filter(product => !selectedCategory || product.category === selectedCategory)
                        .map(product => {
                          const category = categories.find(c => c.id === product.category);
                          return (
                            <tr key={product.id}>
                              <td>{product.name}</td>
                              <td>{category ? category.name : 'Sin categoría'}</td>
                              <td>${product.price}</td>
                              <td>
                                <button 
                                  className="btn btn-sm btn-outline-primary me-1"
                                  onClick={() => handleEdit(product)}
                                >
                                  Editar
                                </button>
                                <button 
                                  className="btn btn-sm btn-outline-danger"
                                  onClick={() => handleDelete(product.id)}
                                >
                                  Eliminar
                                </button>
                              </td>
                            </tr>
                          );
                      })}
                      {products.filter(product => !selectedCategory || product.category === selectedCategory).length === 0 && (
                        <tr>
                          <td colSpan="4" className="text-center">No hay productos para mostrar</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 