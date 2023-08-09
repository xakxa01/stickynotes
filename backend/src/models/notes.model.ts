import { Schema, model } from "mongoose";
import { Note } from "../type";

const noteSchema = new Schema<Note>({
  title: String,
  text: String,
  image: String,
});

const NoteModel = model<Note>("Note", noteSchema);

export default NoteModel;
