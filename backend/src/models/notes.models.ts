import { Schema, model } from "mongoose";
import { Note } from "../type";

const noteSchema = new Schema<Note>({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const NoteModel = model<Note>("Note", noteSchema);

export default NoteModel;
