import { Router } from "express";
import asyncHandler from "express-async-handler";
import { ModeleModel } from "../models/modele.model";

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const modeles = await ModeleModel.find();
    res.send(modeles);
  })
);

router.get(
  "/:modeleId",
  asyncHandler(async (req, res) => {
    const modele = await ModeleModel.findById(req.params.modeleId);
    res.send(modele);
  })
);

export default router;
