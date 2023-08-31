import { NextFunction, Request, Response } from "express";
import { VerifyErrors, verify } from "jsonwebtoken";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;

  console.log("token:", token);
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  verify(
    token,
    process.env.SECRET_KEY!,
    (err: VerifyErrors | null, decoded: any) => {
      console.log("decoded:", decoded);
      if (err) return res.status(403).json({ message: "Invalid token" });

      // req.body.id = decoded.id;

      next();
    },
  );
};

export default validateToken;
