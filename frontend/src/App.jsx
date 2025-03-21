import React from 'react';
import { Menu } from './pages/Menu';
import { Admin } from './pages/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
        <main>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <footer className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4 mb-md-0">
                <h5 className="h6 text-uppercase mb-3">Ubicación</h5>
                <p className="mb-1"><i className="fas fa-map-marker-alt me-2"></i>Av. Corrientes 1234</p>
                <p className="mb-1"><i className="fas fa-city me-2"></i>Ciudad Autónoma de Buenos Aires</p>
                <p className="mb-0"><i className="fas fa-location-dot me-2"></i>C1043AAZ</p>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <h5 className="h6 text-uppercase mb-3">Contacto</h5>
                <p className="mb-1"><i className="fas fa-phone me-2"></i>+54 11 4123-4567</p>
                <p className="mb-1"><i className="fas fa-envelope me-2"></i>info@casaeureka.com</p>
                <p className="mb-0"><i className="fab fa-whatsapp me-2"></i>+54 911 1234-5678</p>
              </div>
              <div className="col-md-4">
                <h5 className="h6 text-uppercase mb-3">Síguenos</h5>
                <div className="social-links">
                  <a href="https://instagram.com/casaeureka" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fa-lg"></i>
                  </a>
                  <a href="https://facebook.com/casaeureka" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook fa-lg"></i>
                  </a>
                  <a href="https://twitter.com/casaeureka" className="text-light" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-top text-center">
              <p className="mb-0">&copy; {new Date().getFullYear()} Casa Eureka. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
