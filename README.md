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
La URL base pública de la API desplegada es:

http://3.91.226.96:3000/

Fin.
