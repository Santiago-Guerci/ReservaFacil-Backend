import mongoose from "./mongoose.js";
const { Schema, model } = mongoose;

const restaurantSchema = new Schema({
  name: { type: String, required: true, trim: true },
  address: { type: String, trim: true },
  cuisine: { type: String, trim: true },
  rating: { type: Number, min: 0, max: 5, default: 0 },
  priceRange: { type: String, enum: ["$", "$$", "$$$", "$$$$"], default: "$$" },
  imageUrl: { type: String, trim: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  zone: { type: String, trim: true },
  description: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now },
});

const Restaurant = model("Restaurant", restaurantSchema);

export default Restaurant;
