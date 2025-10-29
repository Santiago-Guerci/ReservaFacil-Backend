import "dotenv/config";
import express from "express";
import "./db/mongoose.js";
import restaurantsRouter from "./routes/restaurants.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/restaurants", restaurantsRouter);

app.get("/", (req, res) => {
  res.json({ message: "Restaurants API - use /restaurants" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
