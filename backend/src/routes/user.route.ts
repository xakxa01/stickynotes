import { Router } from "express";
import {
  createUser,
  deleteUser,
  deleteUserById,
  getUser,
  getUserById,
  updateUser,
  updateUserById,
} from "../controllers/user.controller";

const router = Router();

router
  .route("/")
  .get(getUser)
  .post(createUser)
  .put(updateUser)
  .delete(deleteUser);

router
  .route("/:id")
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

export default router;
