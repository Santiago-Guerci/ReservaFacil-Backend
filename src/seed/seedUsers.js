import "dotenv/config";
import mongoose from "../db/mongoose.js";
import User from "../db/user.schema.js";
import bcrypt from "bcryptjs";

const sample = [
  {
    name: "Santiago",
    email: "santi@example.com",
    password: "password123",
    phone: "+59890000000",
    role: "admin",
    favorites: [],
  },
  {
    name: "María",
    email: "maria@example.com",
    password: "maria123",
    phone: "+59890000001",
    role: "client",
    favorites: [],
  },
];

async function seed() {
  try {
    const hashed = await Promise.all(
      sample.map(async (u) => ({
        name: u.name,
        email: u.email,
        password: await bcrypt.hash(u.password, 10),
        phone: u.phone,
        role: u.role || "client",
        favorites: u.favorites || [],
      }))
    );

    await User.deleteMany({});
    const docs = await User.insertMany(hashed);
    console.log(`Inserted ${docs.length} users`);
  } catch (err) {
    console.error("Seeding users error:", err.message);
  } finally {
    mongoose.connection.close();
  }
}

seed();
