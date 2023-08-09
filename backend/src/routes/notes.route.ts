import { Router } from "express";
import {
  createNote,
  deleteNoteById,
  getNoteById,
  updateNoteById,
} from "../controllers/notes.controller";

const router = Router();

router.route("/").post(createNote);

router
  .route("/:id")
  .get(getNoteById)
  .put(updateNoteById)
  .delete(deleteNoteById);

export default router;
