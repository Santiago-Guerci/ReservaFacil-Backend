import express from "express";
import reportsController from "../controllers/reports.controller.js";

const router = express.Router();

// GET /reports/least-reservations-tuesday?limit=5
router.get("/least-reservations-tuesday", reportsController.leastReservationsTuesday);
// GET /reports/top-restaurants?period=30&limit=5
router.get("/top-restaurants", reportsController.topRestaurants);

export default router;
