import "dotenv/config";
import mongoose from "../db/mongoose.js";
import Restaurant from "../db/restaurant.schema.js";

const sample = [
  {
    name: "Casa Bella",
    address: "Av. Principal 123, Ciudad",
    cuisine: "Italian",
    rating: 4.5,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
    location: { lat: -34.6037, lng: -58.3816 },
    zone: "Centro",
    description: "Clásico italiano con pastas y pizzas caseras.",
  },
  {
    name: "Sabor Local",
    address: "Calle 9 Nº 42",
    cuisine: "Uruguayan",
    rating: 4.2,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    location: { lat: -34.603, lng: -58.44 },
    zone: "Barrio Histórico",
    description: "Comida regional con ingredientes locales y sazón casera.",
  },
  {
    name: "The Vegan Spot",
    address: "Boulevard Verde 77",
    cuisine: "Vegan",
    rating: 4.8,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1200&auto=format&fit=crop",
    location: { lat: -34.6, lng: -58.38 },
    zone: "Norte",
    description: "Alternativas 100% veganas y saludables.",
  },
  {
    name: "Sushi Hana",
    address: "Paseo del Mar 5",
    cuisine: "Japanese",
    rating: 4.7,
    priceRange: "$$$",
    imageUrl: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=1200&auto=format&fit=crop&q=80",
    location: { lat: -34.59, lng: -58.39 },
    zone: "Costanera",
    description: "Especialidad en sushi y platos japoneses contemporáneos.",
  },
  {
    name: "Taco Town",
    address: "Av. Central 200",
    cuisine: "Mexican",
    rating: 4.0,
    priceRange: "$",
    imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1200&auto=format&fit=crops",
    location: { lat: -34.61, lng: -58.37 },
    zone: "Oeste",
    description: "Tacos y antojitos mexicanos con salsas caseras.",
  },

  // Múltiples McDonald's (mismo nombre, distintas zonas/ubicaciones)
  {
    name: "McDonald's",
    address: "Av. Corrientes 950, CABA",
    cuisine: "Fast Food",
    rating: 4.0,
    priceRange: "$",
    imageUrl: "https://infofunes.com.ar/uploads/mcdonalds%20funes.jpg",
    location: { lat: -34.6075, lng: -58.372 },
    zone: "Microcentro",
    description: "Sucursal céntrica en Av. Corrientes, muy concurrida por la zona teatral.",
  },
  {
    name: "McDonald's",
    address: "Av. Santa Fe 3200, Palermo, CABA",
    cuisine: "Fast Food",
    rating: 4.0,
    priceRange: "$",
    imageUrl: "https://infofunes.com.ar/uploads/mcdonalds%20funes.jpg",
    location: { lat: -34.5836, lng: -58.42 },
    zone: "Palermo",
    description: "Sucursal en Palermo, cerca de restaurantes y locales comerciales.",
  },
  {
    name: "McDonald's",
    address: "Av. Santa Fe 1600, Recoleta, CABA",
    cuisine: "Fast Food",
    rating: 3.9,
    priceRange: "$",
    imageUrl: "https://infofunes.com.ar/uploads/mcdonalds%20funes.jpg",
    location: { lat: -34.5875, lng: -58.3923 },
    zone: "Recoleta",
    description: "Sucursal en Recoleta, zona comercial y turística.",
  },
  {
    name: "McDonald's",
    address: "Alicia Moreau de Justo 1000, Puerto Madero, CABA",
    cuisine: "Fast Food",
    rating: 4.1,
    priceRange: "$",
    imageUrl: "https://infofunes.com.ar/uploads/mcdonalds%20funes.jpg",
    location: { lat: -34.6086, lng: -58.365 },
    zone: "Puerto Madero",
    description: "Sucursal en Puerto Madero con opciones para turistas y oficinas.",
  },
  {
    name: "McDonald's",
    address: "Av. del Libertador 5600, Belgrano, CABA",
    cuisine: "Fast Food",
    rating: 3.9,
    priceRange: "$",
    imageUrl: "https://infofunes.com.ar/uploads/mcdonalds%20funes.jpg",
    location: { lat: -34.5585, lng: -58.4526 },
    zone: "Belgrano",
    description: "Sucursal en Belgrano, cercana a centros comerciales y residenciales.",
  },
  {
    name: "McDonald's",
    address: "Avenida Rivadavia 4200, Caballito, CABA",
    cuisine: "Fast Food",
    rating: 3.8,
    priceRange: "$",
    imageUrl: "https://infofunes.com.ar/uploads/mcdonalds%20funes.jpg",
    location: { lat: -34.615, lng: -58.438 },
    zone: "Caballito",
    description: "Sucursal en Caballito con amplio local y acceso a transporte público.",
  },
];

async function seed() {
  try {
    await Restaurant.deleteMany({});
    const docs = await Restaurant.insertMany(sample);
    console.log(`Inserted ${docs.length} restaurants`);
  } catch (err) {
    console.error("Seeding error:", err.message);
  } finally {
    mongoose.connection.close();
  }
}

seed();
