import UsersService from "../services/users.service.js";

const postUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await UsersService.postUser(userData);
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UsersService.getUserById(id);
    if (!user) return res.status(404).send({ error: "User not found" });
    res.send(user);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UsersService.getAllUsers();
    res.send(users);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const patchUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedUser = await UsersService.updateUser(id, updates);
    if (!updatedUser) return res.status(404).send({ error: "User not found" });
    res.send(updatedUser);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await UsersService.deleteUser(id);
    if (!deletedUser) return res.status(404).send({ error: "User not found" });
    res.send({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export default {
  postUser,
  getUserById,
  getAllUsers,
  patchUser,
  deleteUser,
};
