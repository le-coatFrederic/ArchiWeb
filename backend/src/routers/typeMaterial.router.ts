import { Router } from "express";
import asyncHandler from "express-async-handler";
import { TypeMaterielModel } from "../models/typeMateriel.model";

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const typeMateriels = await TypeMaterielModel.find();
    res.send(typeMateriels);
  })
);

export default router;
