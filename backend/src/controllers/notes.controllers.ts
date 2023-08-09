import { Request, Response } from "express";
import NoteModel from "../models/notes.models";

export const createNote = async (req: Request, res: Response) => {
  try {
    const newNote = new NoteModel(req.body);
    await newNote.save();
    res.status(200).json(newNote);
  } catch (error) {
    res.json({ message: error });
  }
};

export const getNote = async (req: Request, res: Response) => {
  try {
    const note = await NoteModel.findById(req.params.id);
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error });
    res.status(404).json({ message: "Note not found" });
  }
};

export const updateNote = async (req: Request, res: Response) => {
  try {
    const note = await NoteModel.findByIdAndUpdate(req.params.id, req.body, {
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
    await NoteModel.findByIdAndDelete(req.params.id);
    res.json("note delete");
  } catch (error) {
    res.json({ message: error });
    res.status(404).json({ message: "Note not found" });
  }
};
