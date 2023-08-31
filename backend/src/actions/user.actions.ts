import { QueryOptions } from "mongoose";
import UserModel from "../models/user.models";
import { User } from "../type";

export const createUser = (body: Pick<User, "email" | "password">) =>
  new UserModel(body);

export const findUser = (query: Partial<User>) => UserModel.findOne(query);

export const findUserById = (id: string) => UserModel.findById(id);

export const findUserByIdAndUpdate = (
  id: string,
  body: User,
  object: QueryOptions,
) => UserModel.findByIdAndUpdate(id, body, object);

export const findUserByIdAndDelete = (id: string) =>
  UserModel.findByIdAndDelete(id);
