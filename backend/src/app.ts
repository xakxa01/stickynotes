import express from "express";
import cors from "cors";
import morgan from "morgan";
import usersRouter from "./routes/user.routes";
import notesRouter from "./routes/notes.routes";
import authRouter from "./routes/auth.routes";
import { config } from "dotenv";
import connectDB from "./connection";
import cookieParser from "cookie-parser";

const app = express();

config();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/users", usersRouter);
app.use("/api/notes", notesRouter);
app.use("/api", authRouter);

const port = process.env.PORT || 3000;

connectDB();
app.listen(port);
console.log("Server running on port", port);
