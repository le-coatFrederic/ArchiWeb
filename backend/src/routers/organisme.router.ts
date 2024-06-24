import { Router } from "express";
import asyncHandler from "express-async-handler";
import { OrganismeModel } from "../models/organisme.model";

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const organismes = await OrganismeModel.find();
    res.send(organismes);
  })
);

export default router;
