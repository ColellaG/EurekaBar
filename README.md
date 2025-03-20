# Casa Eureka - Menú Digital

Menú digital para Casa Eureka, desarrollado con React y Django. Esta aplicación web permite visualizar el menú del café de manera elegante y responsive.

## Características

- Diseño moderno y responsive
- Categorización de productos
- Interfaz intuitiva con acordeón para las categorías
- Información detallada de productos incluyendo descripciones y precios
- Sección de contacto y redes sociales

## Tecnologías Utilizadas

### Frontend
- React
- Bootstrap 5
- Font Awesome
- Google Fonts (Roboto & Roboto Condensed)

### Backend
- Django
- Django REST Framework
- SQLite

## Instalación

### Backend

1. Navegar al directorio del backend:
```bash
cd backend
```

2. Crear y activar entorno virtual:
```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```

3. Instalar dependencias:
```bash
pip install -r requirements.txt
```

4. Aplicar migraciones:
```bash
python manage.py migrate
```

5. Poblar la base de datos:
```bash
python manage.py populate_menu
```

6. Iniciar el servidor:
```bash
python manage.py runserver
```

### Frontend

1. Navegar al directorio del frontend:
```bash
cd frontend
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## Uso

- Backend API: http://localhost:8000/api/
- Frontend: http://localhost:5173
- Documentación API: http://localhost:8000/swagger/

## Contacto

Casa Eureka
- 📍 Av. Corrientes 1234, CABA
- 📞 +54 11 4123-4567
- 📧 info@casaeureka.com
- 💬 WhatsApp: +54 911 1234-5678

## Licencia

Este proyecto está bajo la Licencia MIT. 