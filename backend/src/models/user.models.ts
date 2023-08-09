import { Schema, model } from "mongoose";
import { User } from "../type";

const UserSchema = new Schema<User>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  notes: {
    type: [String],
    default: [],
    required: true,
  },
  image: String,
});

const UserModel = model<User>("User", UserSchema);

export default UserModel;
