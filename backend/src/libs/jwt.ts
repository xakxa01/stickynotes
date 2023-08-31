import jwt from "jsonwebtoken";
import { ObjectId } from "../type";

interface IPayload {
  id: ObjectId;
}

export const createAccessToken = (payload: IPayload) =>
  new Promise((resolve, reject) =>
    jwt.sign(
      payload,
      process.env.SECRET_KEY!,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      },
    ),
  );
