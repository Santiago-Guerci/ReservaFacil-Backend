import express from "express";
import restaurantsController from "../controllers/restaurants.controller.js";
import { ensureAdmin } from "../middlewares/restaurants.middleware.js";

const router = express.Router();

router.post("/", ensureAdmin, restaurantsController.postRestaurant);
router.get("/", restaurantsController.getAllRestaurants);
router.get("/least-booked", restaurantsController.getLeastBookedRestaurant);
router.get("/:id", restaurantsController.getRestaurantById);
router.patch("/:id", ensureAdmin, restaurantsController.patchRestaurant);
router.delete("/:id", ensureAdmin, restaurantsController.deleteRestaurant);

export default router;
