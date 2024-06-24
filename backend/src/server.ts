import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import materielRouter from "./routers/material.router";
import modeleRouter from "./routers/modele.router";
import organismeRouter from "./routers/organisme.router";
import roleRouter from "./routers/role.router";
import salleRouter from "./routers/salle.router";
import typeMaterialRouter from "./routers/typeMaterial.router";
import utilisateurRouter from "./routers/utilisateur.router";
import { dbConnect } from "./configs/database.config";

dotenv.config();
dbConnect();

process.env.MONGO_URL;
const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.use("/api/modeles", modeleRouter);
app.use("/api/materiels", materielRouter);
app.use("/api/organismes", organismeRouter);
app.use("/api/roles", roleRouter);
app.use("/api/salles", salleRouter);
app.use("/api/typeMateriels", typeMaterialRouter);
app.use("/api/utilisateurs", utilisateurRouter);

const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});
