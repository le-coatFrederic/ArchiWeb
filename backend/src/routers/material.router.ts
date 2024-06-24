import { Router } from "express";
import asyncHandler from "express-async-handler";
import { MaterielModel } from "../models/materiel.model";

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const materiels = await MaterielModel.find();
    res.send(materiels);
  })
);

export default router;
