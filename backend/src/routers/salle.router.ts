import { Router } from "express";
import asyncHandler from "express-async-handler";
import { SalleModel } from "../models/salle.model";

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const salles = await SalleModel.find();
    res.send(salles);
  })
);

export default router;
