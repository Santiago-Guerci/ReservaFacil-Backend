import User from "../db/user.schema.js";

const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (error) {
    throw error;
  }
};

const getUsers = async () => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    return users;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, updates) => {
  try {
    const options = { new: true, runValidators: true };
    const updated = await User.findByIdAndUpdate(id, updates, options);
    return updated;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const deleted = await User.findByIdAndDelete(id);
    return deleted;
  } catch (error) {
    throw error;
  }
};

export default {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
