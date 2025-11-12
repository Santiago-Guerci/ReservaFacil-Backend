import ReservationsService from "../services/reservations.service.js";

const postReservation = async (req, res) => {
  try {
    const reservationData = req.body;
    const newReservation = await ReservationsService.postReservation(reservationData);
    res.status(201).send(newReservation);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await ReservationsService.getReservationById(id);
    if (!reservation) return res.status(404).send({ error: "Reservation not found" });
    res.send(reservation);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getAllReservations = async (req, res) => {
  try {
    const reservations = await ReservationsService.getAllReservations();
    res.send(reservations);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getReservationsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const reservations = await ReservationsService.getReservationsByUser(userId);
    res.send(reservations);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const patchReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updated = await ReservationsService.updateReservation(id, updates);
    if (!updated) return res.status(404).send({ error: "Reservation not found" });
    res.send(updated);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await ReservationsService.deleteReservation(id);
    if (!deleted) return res.status(404).send({ error: "Reservation not found" });
    res.send({ message: "Reservation deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export default {
  postReservation,
  getReservationById,
  getAllReservations,
  getReservationsByUser,
  patchReservation,
  deleteReservation,
};
