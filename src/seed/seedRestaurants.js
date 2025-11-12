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
  },
  {
    name: "Sabor Local",
    address: "Calle 9 Nº 42",
    cuisine: "Uruguayan",
    rating: 4.2,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    location: { lat: -34.603, lng: -58.44 },
  },
  {
    name: "The Vegan Spot",
    address: "Boulevard Verde 77",
    cuisine: "Vegan",
    rating: 4.8,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1200&auto=format&fit=crop",
    location: { lat: -34.6, lng: -58.38 },
  },
  {
    name: "Sushi Hana",
    address: "Paseo del Mar 5",
    cuisine: "Japanese",
    rating: 4.7,
    priceRange: "$$$",
    imageUrl: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=1200&auto=format&fit=crop&q=80",
    location: { lat: -34.59, lng: -58.39 },
  },
  {
    name: "Taco Town",
    address: "Av. Central 200",
    cuisine: "Mexican",
    rating: 4.0,
    priceRange: "$",
    imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1200&auto=format&fit=crops",
    location: { lat: -34.61, lng: -58.37 },
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
