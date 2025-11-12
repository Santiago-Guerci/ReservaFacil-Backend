import express from "express";
import usersController from "../controllers/users.controller.js";

const router = express.Router();

router.post("/", usersController.postUser);
router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.patch("/:id", usersController.patchUser);
router.delete("/:id", usersController.deleteUser);

export default router;
