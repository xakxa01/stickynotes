import { Request, Response } from "express";

export const getUser = async (req: Request, res: Response) => {
  res.send("Hello World");
};

export const createUser = async (req: Request, res: Response) => {};

export const updateUser = async (req: Request, res: Response) => {};

export const deleteUser = async (req: Request, res: Response) => {};

export const getUserById = async (req: Request, res: Response) => {};

export const updateUserById = async (req: Request, res: Response) => {};

export const deleteUserById = async (req: Request, res: Response) => {};
