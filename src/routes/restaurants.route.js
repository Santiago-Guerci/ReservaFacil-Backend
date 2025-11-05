import express from "express";
import restaurantsController from "../controllers/restaurants.controller.js";

const router = express.Router();

router.post("/", restaurantsController.postRestaurant);
router.get("/", restaurantsController.getAllRestaurants);
router.get("/:id", restaurantsController.getRestaurantById);
router.patch("/:id", restaurantsController.patchRestaurant);
router.delete("/:id", restaurantsController.deleteRestaurant);

export default router;
