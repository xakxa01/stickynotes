import { Router } from "express";
import {
  allNotes,
  createNote,
  deleteNote,
  getNote,
  updateNote,
} from "../controllers/notes.controllers";
import validateToken from "../middlewares/validateToken";

const router = Router();

router.use(validateToken);

router.route("/").post(createNote).get(allNotes);

router.route("/:id").get(getNote).put(updateNote).delete(deleteNote);

export default router;
