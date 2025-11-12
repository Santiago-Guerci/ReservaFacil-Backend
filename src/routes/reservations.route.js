import express from "express";
import reservationsController from "../controllers/reservations.controller.js";

const router = express.Router();

router.post("/", reservationsController.postReservation);
router.get("/", reservationsController.getAllReservations);
router.get("/:id", reservationsController.getReservationById);
// get reservations for a specific user
router.get("/user/:userId", reservationsController.getReservationsByUser);
router.patch("/:id", reservationsController.patchReservation);
router.delete("/:id", reservationsController.deleteReservation);

export default router;
