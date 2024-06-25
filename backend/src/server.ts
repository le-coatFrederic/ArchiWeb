import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import materielRouter from "./routers/material.router";
import utilisateurRouter from "./routers/utilisateur.router";
import { dbConnect } from "./configs/database.config";

dotenv.config();
dbConnect();

process.env.MONGO_URL;
const app = express();
const bodyParser = require("body-parser");
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);
app.use(bodyParser.json());

app.use("/api/materiels", materielRouter);
app.use("/api/utilisateurs", utilisateurRouter);

const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});
