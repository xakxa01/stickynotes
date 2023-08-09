import { Schema, model } from "mongoose";
import { User } from "../type";

const UserSchema = new Schema<User>({
  email: String,
  password: String,
  notes: [String],
  image: String,
});

const UserModel = model<User>("User", UserSchema);

export default UserModel;
