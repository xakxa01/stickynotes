import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config";
import { ObjectId } from "../type";

interface IPayload {
  id: ObjectId;
}

export const createAccessToken = (payload: IPayload) =>
  new Promise((resolve, reject) =>
    jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    })
  );
