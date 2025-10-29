import express from "express";
import Restaurant from "../models/restaurant.js";

const router = express.Router();

// Create - POST /restaurants
router.post("/", async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Read All - GET /restaurants
router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({}).sort({ createdAt: -1 });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read One - GET /restaurants/:id
router.get("/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ error: "Not found" });
    res.json(restaurant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update - PATCH /restaurants/:id
router.patch("/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowed = ["name", "address", "cuisine", "rating", "priceRange"];
  const valid = updates.every((u) => allowed.includes(u));
  if (!valid) return res.status(400).json({ error: "Invalid updates" });

  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ error: "Not found" });

    updates.forEach((u) => (restaurant[u] = req.body[u]));
    await restaurant.save();
    res.json(restaurant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete - DELETE /restaurants/:id
router.delete("/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!restaurant) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted", id: restaurant._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
