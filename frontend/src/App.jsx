import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from './pages/Menu';
import { Admin } from './pages/Admin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  return (
    <Router>
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/png" href="/images/EurekaLogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Casa Eureka - Café & Restaurante</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className="app">
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Roboto+Condensed:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
        <main className="container py-4">
          <div className="menu-header">
            <img src="/images/EurekaLogo.png" alt="Casa Eureka" className="main-logo" />
            </div>
          
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4">
                <h5>Ubicación</h5>
                <p>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                  Salas y Valdez 1021
                </p>
                <p>Yerba Buena, Tucumán</p>
              </div>
              
              <div className="col-md-4 mb-4">
                <h5>Contacto</h5>
                <p>
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  +54 9 261 3053354
                </p>
                <p>
                  <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
                  WhatsApp: +54 9 261 3053354
                </p>
              </div>
              
              <div className="col-md-4 mb-4">
                <h5>Síguenos</h5>
                <div className="social-links">
                  <a href="https://www.instagram.com/casa.eureka/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-top text-center">
              <p className="mb-0">&copy; {new Date().getFullYear()} Casa Eureka - Café & Restaurante. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
