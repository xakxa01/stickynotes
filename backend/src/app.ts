import express from "express";
import cors from "cors";
import morgan from "morgan";
import usersRouter from "./routes/user.route";
import notesRouter from "./routes/notes.route";
import { config } from "dotenv";
import connectDB from "./connection";

const app = express();
const port = process.env.PORT || 3000;

config();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/users", usersRouter);
app.use("/api/notes", notesRouter);

connectDB();
app.listen(port);
console.log("Server running on port", port);
