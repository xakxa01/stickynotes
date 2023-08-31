import { Router } from "express";
import { register, login, logout } from "../controllers/auth.controllers";
import { registerSchema, loginSchema } from "../schemas/auth.schema";
import { validateSchema } from "../middlewares/validator.middleware";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema) , login);

router.post("/logout", logout);

export default router;
