import "dotenv/config";
import express from "express";
import "./src/db/mongoose.js";
import restaurantsRouter from "./src/routes/restaurants.route.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/restaurants", restaurantsRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
