/**
 * Seed script - inserts a few restaurant documents into the DB.
 * Run with: npm run seed
 */
// load environment variables so mongoose picks up MONGODB_URI
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
    address: "Av. 18 de Julio 1000",
    cuisine: "Fast Food",
    rating: 4.0,
    priceRange: "$",
    imageUrl: "",
    location: { lat: -34.905, lng: -56.195 },
    zone: "Centro",
    description: "Sucursal céntrica de McDonald's con servicio rápido y local para comer y llevar.",
  },
  {
    name: "McDonald's",
    address: "Rambla 1234",
    cuisine: "Fast Food",
    rating: 4.0,
    priceRange: "$",
    imageUrl: "",
    location: { lat: -34.88, lng: -56.16 },
    zone: "Rambla",
    description: "Sucursal sobre la rambla con vista al mar y espacio familiar.",
  },
  {
    name: "McDonald's",
    address: "Av. Rivera 4500",
    cuisine: "Fast Food",
    rating: 3.9,
    priceRange: "$",
    imageUrl: "",
    location: { lat: -34.86, lng: -56.18 },
    zone: "Norte",
    description: "Sucursal en zona norte, cercana a centros comerciales.",
  },
  {
    name: "McDonald's",
    address: "Bulevar Artigas 2200",
    cuisine: "Fast Food",
    rating: 3.8,
    priceRange: "$",
    imageUrl: "",
    location: { lat: -34.92, lng: -56.2 },
    zone: "Sur",
    description: "Sucursal en el sur de la ciudad con drive-thru disponible.",
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
