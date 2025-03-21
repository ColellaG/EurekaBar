FROM python:3.12-slim

WORKDIR /app

# Copiar archivos de requerimientos primero para aprovechar la caché de Docker
COPY backend/requirements.txt requirements.txt

# Instalar dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el resto del código
COPY backend/ .

# Variables de entorno
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV DJANGO_DEBUG False

# Recopilar archivos estáticos
RUN python manage.py collectstatic --noinput

# Exponer puerto
EXPOSE 8000

# Comando para ejecutar la aplicación
CMD ["gunicorn", "bar_menu.wsgi", "--bind", "0.0.0.0:8000"] 