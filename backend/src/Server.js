import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import foodRouter from "./Routers/food.router.js";
import userRouter from "./Routers/user.router.js";
import { connectDB } from "./config/database.config.js";

connectDB();

const app = express();
app.use(express.json());

app.use(cors());

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
