import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

// middlewares
import morgan from "morgan";
import cors from "cors";
import { mongoConnect } from "./src/config/mongoConfig.js";
mongoConnect();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Server is live",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:8000`);
});
