import { Request, Response } from "express";
import UserModel from "../models/user.models";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt";
import { ObjectId } from "../type";

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10); // cifra la contraseña
    const newUser = new UserModel({ email, password: passwordHash });
    const userSaved = await newUser.save();

    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      email: userSaved.email,
    });
  } catch (error) {
    res.json({ message: error });
  }
};

export const login = async (req: Request, res: Response) => {};
