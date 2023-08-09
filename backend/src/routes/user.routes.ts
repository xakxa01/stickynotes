import { Router } from "express";
import {
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/user.controllers";

const router = Router();

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;
