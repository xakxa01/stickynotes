import mongoose from "mongoose";

export interface Note {
  title: string;
  text: string;
  createdAt: Date;
  image?: string;
  user: User;
}

export interface User {
  email: string;
  password: string;
  notes: Note[];
  image?: string;
}

export type ObjectId = mongoose.Types.ObjectId;
