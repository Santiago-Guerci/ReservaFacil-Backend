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

5. Ejecuta la app localmente:

```bash
npm start
```

Scripts npm disponibles

- `npm start` — inicia la app (usa `src/index.js`).
- `npm run dev` — inicia con `nodemon` (desarrollo).
- `npm run seed` — inserta datos de ejemplo en la base.

## Variables de entorno

- `MONGODB_URI` — URI de conexión a MongoDB (p. ej. `mongodb+srv://user:pass@cluster0.mongodb.net`).
- `MONGODB_DB` — nombre de la base (por defecto `restaurantsDB`).
- `PORT` — puerto local (por defecto `3000`).

Nota: en AWS (Lightsail o Lambda) debes configurar estas variables en el entorno de la instancia/función; `.env` no se usa automáticamente en producción.

## Endpoints

- `POST /restaurants` — crear restaurante
- `GET /restaurants` — listar restaurantes
- `GET /restaurants/:id` — obtener restaurante por id
- `PATCH /restaurants/:id` — actualizar parcialmente
- `DELETE /restaurants/:id` — eliminar

Campos del modelo (ejemplo)

- `name` (required), `address`, `cuisine`, `rating` (0-5), `priceRange` (`$` - `$$$$`)

## Despliegue en AWS Lightsail (guía rápida)

Flujo típico que describes: trabajar en local, pushear a GitHub, entrar por SSH a la instancia Lightsail, hacer `git pull` y reiniciar el servidor.

Pasos mínimos para configurar la instancia (si aún no los hiciste):

1. SSH a la instancia.
2. Clona el repo (o añade el remoto) y sitúate en la carpeta del proyecto.
3. Instala dependencias (en la instancia):

```bash
npm install --production
```

4. Configura las variables de entorno — puedes usar un `.env` (cuidado con seguridad) o configurar un servicio/archivo del sistema.

5. Ejecuta la aplicación con un proceso administrador para producción (recomendado). Opciones:

- Usando PM2 (recomendado):

```bash
# instala pm2 globalmente si no está
npm install -g pm2
pm2 start src/index.js --name reserva-facil
pm2 save
```

- Usando systemd (ejemplo mínimo): crea `/etc/systemd/system/reserva-facil.service` con el servicio y luego:

```bash
sudo systemctl daemon-reload
sudo systemctl start reserva-facil
sudo systemctl enable reserva-facil
```

Actualizar desde GitHub y reiniciar

1. En la instancia, dentro del repo:

```bash
git pull origin main
npm ci --only=production
```

2. Reinicia el proceso según el gestor que uses:

- Con PM2:

```bash
pm2 restart reserva-facil
```

- Con systemd:

```bash
sudo systemctl restart reserva-facil
```

Notas sobre seguridad y red

- Abre solo los puertos necesarios (HTTP/HTTPS) en el firewall de Lightsail.
- Si usas MongoDB Atlas, asegúrate de permitir la IP pública de la instancia (o configura acceso seguro/VPC).

## Despliegue opcional en AWS Lambda

Si en el futuro quieres adaptar esta API para ejecutarla como función en AWS Lambda, se puede hacer, pero requiere cambios específicos (handler compatible con Lambda, empaquetado con dependencias y configuración de API Gateway). Si lo deseas, puedo preparar un ejemplo y los pasos necesarios para esa adaptación.

## Recomendaciones de producción

- Usa PM2 o systemd para mantener el proceso vivo.
- Configura un proxy inverso (NGINX) si necesitas servir TLS/HTTPS y manejar cabeceras.
- Habilita logs y rotación (PM2 o systemd + logrotate).
- Asegura las variables sensibles (Secrets Manager, SSM Parameter Store o variables de entorno seguras).
- Monitorea el uso de memoria/CPU y ajusta el tamaño de la instancia.

## Notas sobre la conexión a MongoDB

El archivo `src/db/mongoose.js` inicia la conexión en la importación del módulo. En Lambda esto se conecta en el cold start y se reutiliza para invocaciones posteriores — comportamiento correcto.

## Contacto / Próximos pasos

Si quieres, puedo:

- Añadir un ejemplo de `systemd` service file para tu instancia.
- Añadir instrucciones para crear un paquete ZIP listo para Lambda.

Si quieres, puedo:

- Añadir un ejemplo de `systemd` service file para tu instancia.
- Añadir instrucciones para crear un paquete ZIP listo para Lambda.

— Fin —
