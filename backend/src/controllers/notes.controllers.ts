import { Request, Response } from "express";
import {
  createNewNote,
  findAllNotes,
  findNoteById,
  findNoteByIdAndDelete,
 findNoteByIdAndUpdate,
} from "../actions/notes.actions";

export const allNotes = async (req: Request, res: Response) => {
  try {
    const notes = await findAllNotes();
    res.json(notes);
  } catch (error) {
    res.json({ message: error });
  }
};

export const createNote = async (req: Request, res: Response) => {
  try {
    const newNote = createNewNote(req.body);
    await newNote.save();
    res.status(200).json(newNote);
  } catch (error) {
    res.json({ message: error });
  }
};

export const getNote = async (req: Request, res: Response) => {
  try {
    const note = await findNoteById(req.params.id);
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error });
    res.status(404).json({ message: "Note not found" });
  }
};

export const updateNote = async (req: Request, res: Response) => {
  try {
    const note = await findNoteByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(note);
  } catch (error) {
    res.json({ message: error });
    res.status(404).json({ message: "Note not found" });
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    await findNoteByIdAndDelete(req.params.id);
    res.json("note delete");
  } catch (error) {
    res.json({ message: error });
    res.status(404).json({ message: "Note not found" });
  }
};
