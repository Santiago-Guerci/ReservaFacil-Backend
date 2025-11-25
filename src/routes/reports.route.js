import express from "express";
import reportsController from "../controllers/reports.controller.js";

const router = express.Router();
router.get("/least-reservations-tuesday", reportsController.leastReservationsTuesday);
router.get("/top-restaurants", reportsController.topRestaurants);

export default router;
