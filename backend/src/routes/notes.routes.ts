import { Router } from "express";
import {
  createNote,
  deleteNote,
  getNote,
  updateNote,
} from "../controllers/notes.controllers";

const router = Router();

router.route("/").post(createNote);

router.route("/:id").get(getNote).put(updateNote).delete(deleteNote);

export default router;
