/**
 * Seed script - inserts a few restaurant documents into the DB.
 * Run with: npm run seed
 */
// load environment variables so mongoose picks up MONGODB_URI
import "dotenv/config";
import mongoose from "../db/mongoose.js";
import Restaurant from "../models/restaurant.js";

const sample = [
  {
    name: "Casa Bella",
    address: "Av. Principal 123, Ciudad",
    cuisine: "Italian",
    rating: 4.5,
    priceRange: "$$",
  },
  {
    name: "Sabor Local",
    address: "Calle 9 Nº 42",
    cuisine: "Uruguayan",
    rating: 4.2,
    priceRange: "$$",
  },
  {
    name: "The Vegan Spot",
    address: "Boulevard Verde 77",
    cuisine: "Vegan",
    rating: 4.8,
    priceRange: "$$",
  },
  {
    name: "Sushi Hana",
    address: "Paseo del Mar 5",
    cuisine: "Japanese",
    rating: 4.7,
    priceRange: "$$$",
  },
  {
    name: "Taco Town",
    address: "Av. Central 200",
    cuisine: "Mexican",
    rating: 4.0,
    priceRange: "$",
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
