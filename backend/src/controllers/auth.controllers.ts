import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt";
import { createUser, findUser } from "../actions/user.actions";

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10); // encrypt password
    const newUser = createUser({ email, password: passwordHash });
    const userSaved = await newUser.save();

    const token = await createAccessToken({ id: userSaved._id }); // create token

    res.cookie("token", token); // save token in cookie

    res.status(200).json({
      id: userSaved._id,
      email: userSaved.email,
    });
  } catch (error) {
    res.json({ message: error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const userFound = await findUser({ email }); // find user by email
    if (!userFound) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, userFound.password); // compare password with passwordHash
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });

    const token = await createAccessToken({ id: userFound._id }); // create token

    res.cookie("token", token); // save token in cookie

    res.json({
      id: userFound._id,
      email: userFound.email,
    });
  } catch (error) {
    res.json({ message: error });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.cookie("token", "", { expires: new Date(0) });
    res.json({ message: "Logged out" });
  } catch (error) {
    res.json({ message: error });
  }
};
