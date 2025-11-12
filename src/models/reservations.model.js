import Reservation from "../db/reservation.schema.js";

const createReservation = async (reservation) => {
  try {
    const newReservation = await Reservation.create(reservation);
    return newReservation;
  } catch (error) {
    throw error;
  }
};

const getReservations = async () => {
  try {
    const reservations = await Reservation.find({}).sort({ createdAt: -1 }).populate("user restaurant");
    return reservations;
  } catch (error) {
    throw error;
  }
};

const getReservationById = async (id) => {
  try {
    const reservation = await Reservation.findById(id).populate("user restaurant");
    return reservation;
  } catch (error) {
    throw error;
  }
};

const getReservationsByUser = async (userId) => {
  try {
    const reservations = await Reservation.find({ user: userId }).sort({ date: -1 }).populate("restaurant");
    return reservations;
  } catch (error) {
    throw error;
  }
};

const updateReservation = async (id, updates) => {
  try {
    const options = { new: true, runValidators: true };
    const updated = await Reservation.findByIdAndUpdate(id, updates, options).populate("user restaurant");
    return updated;
  } catch (error) {
    throw error;
  }
};

const deleteReservation = async (id) => {
  try {
    const deleted = await Reservation.findByIdAndDelete(id);
    return deleted;
  } catch (error) {
    throw error;
  }
};

export default {
  createReservation,
  getReservations,
  getReservationById,
  getReservationsByUser,
  updateReservation,
  deleteReservation,
};
