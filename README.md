# Casa Eureka - Café & Restaurante

Aplicación web para el menú digital de Casa Eureka, un café y restaurante ubicado en Yerba Buena, Tucumán.

## Características

- Menú digital interactivo
- Panel de administración para gestionar categorías y productos
- Diseño responsive
- Integración con redes sociales

## Tecnologías

### Frontend
- React
- Vite
- Bootstrap
- Font Awesome
- Axios

### Backend
- Django
- Django REST Framework
- SQLite (desarrollo)
- PostgreSQL (producción)

## Requisitos

- Python 3.8+
- Node.js 14+
- npm 6+

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/ColellaG/EurekaBar.git
cd casa-eureka
```

2. Configurar el backend:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
```

3. Configurar el frontend:
```bash
cd frontend
npm install
```

4. Configurar variables de entorno:
- Copiar `.env.example` a `.env` en ambos directorios
- Ajustar las variables según sea necesario

## Ejecución

1. Iniciar el backend:
```bash
cd backend
python manage.py runserver
```

2. En otra terminal, iniciar el frontend:
```bash
cd frontend
npm run dev
```

3. Acceder a:
- Frontend: http://localhost:5173
- Backend: http://localhost:8000
- Admin Django: http://localhost:8000/admin

## Desarrollo

### Estructura del Proyecto

```
casa-eureka/
├── backend/
│   ├── backend/
│   ├── menu/
│   └── manage.py
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
└── README.md
```

### Ramas de Desarrollo

El proyecto mantiene tres ramas principales:

1. `main`: Rama principal con código estable y listo para producción
2. `frontend-dev`: Rama para desarrollo de características frontend
3. `backend-dev`: Rama para desarrollo de características backend

#### Comandos para Manejar Ramas

1. Ver todas las ramas y la rama actual:
```bash
git branch
```

2. Cambiar entre ramas:
```bash
git checkout nombre-rama  # Ejemplo: git checkout frontend-dev
```

3. Crear y cambiar a una nueva rama:
```bash
git checkout -b nueva-rama
```

4. Actualizar rama con cambios de main:
```bash
git checkout nombre-rama
git pull origin main
```

5. Subir cambios a tu rama:
```bash
git add .
git commit -m "Descripción del cambio"
git push origin nombre-rama
```

6. Merge de cambios a main (desde GitHub):
- Crear Pull Request desde tu rama a main
- Revisar cambios
- Aprobar y hacer merge

### Flujo de Trabajo

1. Para desarrollar una nueva característica:
   - Frontend: `git checkout frontend-dev`
   - Backend: `git checkout backend-dev`

2. Crear rama específica para la característica:
   ```bash
   git checkout -b feature/nombre-caracteristica
   ```

3. Al finalizar:
   - Commit y push de los cambios
   - Crear Pull Request a la rama de desarrollo correspondiente

### Convenciones de Código

- Seguir PEP 8 para Python
- Usar ESLint y Prettier para JavaScript/React
- Mantener los componentes React en archivos separados
- Documentar funciones y componentes principales

## Despliegue

1. Backend:
- Configurar variables de entorno de producción
- Ejecutar `python manage.py collectstatic`
- Configurar servidor web (nginx/gunicorn)

2. Frontend:
- Ejecutar `npm run build`
- Servir archivos estáticos con nginx

## Contribuir

1. Fork el repositorio
2. Crear una rama (`git checkout -b feature/nueva-caracteristica`)
3. Commit los cambios (`git commit -am 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Crear un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles. 