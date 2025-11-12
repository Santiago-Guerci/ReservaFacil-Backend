import "dotenv/config";
import mongoose from "../db/mongoose.js";
import Reservation from "../db/reservation.schema.js";
import User from "../db/user.schema.js";
import Restaurant from "../db/restaurant.schema.js";

async function seed() {
  try {
    console.log("Seeding reservations...");
    const user = await User.findOne({}).exec();
    const restaurant = await Restaurant.findOne({}).exec();

    if (!user || !restaurant) {
      console.warn("No user or restaurant found — run seedRestaurants and seedUsers first.");
      return;
    }

    const sample = [
      {
        user: user._id,
        restaurant: restaurant._id,
        date: new Date(Date.now() + 24 * 60 * 60 * 1000),
        partySize: 2,
        status: "confirmed",
        notes: "Mesa cerca de la ventana",
      },
    ];

    await Reservation.deleteMany({});
    const docs = await Reservation.insertMany(sample);
    console.log(`Inserted ${docs.length} reservations`);
  } catch (err) {
    console.error("Seeding reservations error:", err.message);
  } finally {
    mongoose.connection.close();
  }
}

seed();
