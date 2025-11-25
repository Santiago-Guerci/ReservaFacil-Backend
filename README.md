# Restaurants API (Node.js + Express + Mongoose)

Simple API for a college project. Implements the four CRUD operations for a Restaurant model, a MongoDB connection, and a seed script with sample restaurants.

Getting started

1. Ensure you have Node.js (>=14) and MongoDB installed and running locally.
2. From the project root, install dependencies:

```bash
npm install
```

3. (Optional) Set a custom MongoDB URI in `.env` file:

```
MONGODB_URI=mongodb://127.0.0.1:27017/restaurants-db
PORT=3000
```

4. Seed the database with sample restaurants:

```bash
npm run seed
```

5. Start the server:

```bash
npm start
```

API endpoints

- POST /restaurants -> create a restaurant
- GET /restaurants -> list restaurants
- GET /restaurants/:id -> get one restaurant
- PATCH /restaurants/:id -> update (partial)
- DELETE /restaurants/:id -> delete

Model fields (example): name (required), address, cuisine, rating (0-5), priceRange ($ - $$$$)

Seed data examples

- Casa Bella (Italian)
- Sabor Local (Uruguayan)
- The Vegan Spot (Vegan)
- Sushi Hana (Japanese)

## ReservaFacil-Backend — API de Restaurantes (Node.js + Express + Mongoose)

Esta API es un proyecto educativo que implementa operaciones CRUD sobre un modelo `Restaurant`, conexión a MongoDB y un script de seed con datos de ejemplo.

Contenido de este README

- Descripción rápida
- Requisitos
- Configuración y ejecución local
- Variables de entorno
- Endpoints disponibles
- Despliegue en AWS Lightsail (flujo de trabajo: git pull + restart)
- Despliegue opcional en AWS Lambda
- Buenas prácticas y recomendaciones

## Descripción rápida

La API expone rutas REST bajo `/restaurants` para crear, listar, leer, actualizar y borrar restaurantes. Está hecha con Express y Mongoose.

## Requisitos

- Node.js (recomiendo Node 18+)
- npm
- MongoDB (local o Atlas)

## Instalación y ejecución local

1. Clona el repositorio y entra en la carpeta del proyecto.

2. Instala dependencias:

```bash
npm install
```

3. (Opcional) Crea un archivo `.env` en la raíz para variables de entorno (ver sección siguiente).

4. Si quieres cargar datos de ejemplo:

```bash
npm run seed
```

## ReservaFacil-Backend

Aplicación REST en Node.js + Express + Mongoose para gestionar restaurantes, usuarios y reservas. Proyecto educativo/POC pensado para desarrollo local y despliegue sencillo en un servidor (por ejemplo AWS Lightsail).

**Qué hace**

- CRUD de restaurantes (`/restaurants`).
- Gestión de usuarios (`/users`) y autenticación (`/auth/register`, `/auth/login`).
- Reservas (`/reservations`) vinculadas a usuario y restaurante.
- Informes simples (`/reports`) como "menos reservas los martes" y "top restaurantes en los últimos N días".

**Endpoints principales**

- `POST /restaurants` — Crear restaurante
- `GET /restaurants` — Listar restaurantes
- `GET /restaurants/:id` — Obtener restaurante
- `PATCH /restaurants/:id` — Actualizar restaurante
- `DELETE /restaurants/:id` — Borrar restaurante
- `POST /auth/register` — Registrar usuario
- `POST /auth/login` — Login (devuelve JWT)
- `GET /users` — Listar usuarios (seguridad no implementada por defecto)
- `POST /reservations` — Crear reserva
- `GET /reservations` — Listar reservas
- `GET /reports/least-reservations-tuesday?limit=5` — Menos reservas los martes
- `GET /reports/top-restaurants?period=30&limit=5` — Top restaurantes últimos N días

Si añades nuevas rutas en el futuro, revisa `src/routes`.

Requisitos

- Node.js (recomiendo 16/18+)
- npm
- MongoDB (local o Atlas)

Cómo ejecutar localmente

1. Clona el repositorio y entra en la carpeta del proyecto.

2. Instala dependencias:

```bash
npm install
```

3. Crea un archivo `.env` (opcional) con estas variables mínimas:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/restaurants-db
MONGODB_DB=restaurantsDB
PORT=3000
JWT_SECRET=tu_secreto_dev
```

4. (Opcional) Cargar datos de ejemplo:

```bash
# restaurantes
npm run seed
# usuarios
npm run seed:users
# reservas
npm run seed:reservations
# o ejecutar todo
npm run seed:all
```

5. Iniciar la aplicación:

```bash
npm start
```

Desarrollo (hot-reload):

```bash
npm run dev
```

Variables de entorno importantes

- `MONGODB_URI` — URI de MongoDB
- `MONGODB_DB` — nombre de la base (opcional)
- `PORT` — puerto (por defecto `3000`)
- `JWT_SECRET` — secreto para firmar tokens JWT

Nota sobre despliegue en AWS Lightsail
La API fue desplegada y probada en AWS Lightsail en una instancia con Node.js. Flujo mínimo para actualizar en la instancia:

```bash
# entrar por SSH, dentro del repo:
git pull origin main
npm ci --only=production
# reiniciar el proceso (ej. pm2)
pm2 restart reserva-facil
```

URL pública de prueba
Puedes probar los mismos endpoints en la instancia publicada en:

http://3.91.226.96:3000/

Precauciones

- No ejecutes los scripts de `seed` en una base de datos de producción (borran colecciones). Haz backup antes de sembrar datos.
- Asegura `JWT_SECRET` y las credenciales de la base de datos en producción.

Si quieres, puedo: añadir middleware de autenticación obligatorio, ejemplos de `systemd` o `pm2` service file, o preparar pasos para empaquetar la app para AWS Lambda.

Fin.

- Habilita logs y rotación (PM2 o systemd + logrotate).
