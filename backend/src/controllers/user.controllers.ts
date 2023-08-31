import { Request, Response } from "express";
import {
  findUserById,
  findUserByIdAndDelete,
  findUserByIdAndUpdate,
} from "../actions/user.actions";

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await findUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.json({ message: error });
    res.status(404).json({ message: "User not found" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await findUserByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    res.json({ message: error });
    res.status(404).json({ message: "User not found" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await findUserByIdAndDelete(req.params.id);
    res.json("user delete");
  } catch (error) {
    res.json({ message: error });
    res.status(404).json({ message: "User not found" });
  }
};
