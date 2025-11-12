import mongoose from "./mongoose.js";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true, unique: true },
  password: { type: String, required: true, select: false },
  phone: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now },
  role: { type: String, enum: ["client", "admin"], default: "client" },
  favorites: [{ type: Schema.Types.ObjectId, ref: "Restaurant" }],
});

const User = model("User", userSchema);

export default User;
