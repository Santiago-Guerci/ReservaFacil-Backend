import UsersModel from "../models/users.model.js";

const postUser = async (data) => {
  const user = await UsersModel.createUser(data);
  return user;
};

const getAllUsers = async () => {
  const users = await UsersModel.getUsers();
  return users;
};

const getUserById = async (id) => {
  const user = await UsersModel.getUserById(id);
  return user;
};

const updateUser = async (id, updates) => {
  const updatedUser = await UsersModel.updateUser(id, updates);
  return updatedUser;
};

const deleteUser = async (id) => {
  const deletedUser = await UsersModel.deleteUser(id);
  return deletedUser;
};

export default {
  postUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
