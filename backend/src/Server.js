import express from "express";
import cors from "cors";
import foodRouter from "./Routers/food.router.js";

const app = express();
const cors = require("cors");

app.use(cors());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.use("/api/foods", foodRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("listening on port" + PORT);
});
