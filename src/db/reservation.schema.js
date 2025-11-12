import mongoose from "./mongoose.js";
const { Schema, model, Types } = mongoose;

const reservationSchema = new Schema({
  user: { type: Types.ObjectId, ref: "User", required: true },
  restaurant: { type: Types.ObjectId, ref: "Restaurant", required: true },
  date: { type: Date, required: true },
  partySize: { type: Number, default: 1, min: 1 },
  status: { type: String, enum: ["pending", "confirmed", "cancelled", "completed"], default: "pending" },
  notes: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now },
});

const Reservation = model("Reservation", reservationSchema);

export default Reservation;
