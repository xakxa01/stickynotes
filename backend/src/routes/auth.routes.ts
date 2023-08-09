import { Router } from "express";
import { register, login } from "../controllers/auth.controllers";

const router = Router();

router.post("/register", register);

export default router;
