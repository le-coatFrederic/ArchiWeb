import { Router } from "express";
import asyncHandler from "express-async-handler";
import { RoleModel } from "../models/role.model";

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const roles = await RoleModel.find();
    res.send(roles);
  })
);

export default router;