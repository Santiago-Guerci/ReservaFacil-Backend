import ReservationsModel from "../models/reservations.model.js";

const postReservation = async (data) => {
  const reservation = await ReservationsModel.createReservation(data);
  return reservation;
};

const getAllReservations = async () => {
  const reservations = await ReservationsModel.getReservations();
  return reservations;
};

const getReservationById = async (id) => {
  const reservation = await ReservationsModel.getReservationById(id);
  return reservation;
};

const getReservationsByUser = async (userId) => {
  const reservations = await ReservationsModel.getReservationsByUser(userId);
  return reservations;
};

const updateReservation = async (id, updates) => {
  const updated = await ReservationsModel.updateReservation(id, updates);
  return updated;
};

const deleteReservation = async (id) => {
  const deleted = await ReservationsModel.deleteReservation(id);
  return deleted;
};

export default {
  postReservation,
  getAllReservations,
  getReservationById,
  getReservationsByUser,
  updateReservation,
  deleteReservation,
};
