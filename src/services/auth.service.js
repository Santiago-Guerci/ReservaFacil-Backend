import UsersModel from "../models/users.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (data) => {
  const { email, password, name, phone } = data;
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  const userPayload = { email, password: hashed, name, phone };
  const user = await UsersModel.createUser(userPayload);
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "dev_secret", { expiresIn: "1h" });
  return { user, token };
};

const login = async (email, password) => {
  const User = await import("../db/user.schema.js");
  const user = await User.default.findOne({ email }).select("+password");
  if (!user) throw new Error("Invalid credentials");
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid credentials");
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "dev_secret", { expiresIn: "1h" });
  const userObj = user.toObject();
  delete userObj.password;
  return { user: userObj, token };
};

export default { register, login };
