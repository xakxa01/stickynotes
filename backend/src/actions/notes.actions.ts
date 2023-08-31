import { QueryOptions } from "mongoose";
import NoteModel from "../models/notes.models";
import { Note } from "../type";

export const findAllNotes = () => NoteModel.find();

export const createNewNote = (body: Note) => new NoteModel(body);

export const findNoteById = (id: string) => NoteModel.findById(id);

export const findNoteByIdAndUpdate = (
  id: string,
  body: Note,
  object: QueryOptions,
) => NoteModel.findByIdAndUpdate(id, body, object);

export const findNoteByIdAndDelete = (id: string) =>
  NoteModel.findByIdAndDelete(id);
