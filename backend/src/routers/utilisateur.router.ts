import { Router } from "express";
import asyncHandler from "express-async-handler";
import { Utilisateur, UtilisateurModel } from "../models/utilisateur.model";
import jwt from "jsonwebtoken";
import { HTTP_BAD_PASSWORD, HTTP_BAD_REQUEST } from "../constants/http_request";
import bcrypt from "bcryptjs";

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const utilisateurs = await UtilisateurModel.find();
    res.send(utilisateurs);
  })
);

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await UtilisateurModel.findOne({ email, password });

    if (user) {
      res.send(generateTokenResponse(user));
    } else {
      res
        .status(HTTP_BAD_REQUEST)
        .send("Nom d'utilisateur ou mot de passe est invalide!");
    }
  })
);

router.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { email, password, nom, prenom, organisme } = req.body;
    const user = await UtilisateurModel.findOne({ email });
    if (user) {
      res
        .status(HTTP_BAD_REQUEST)
        .send("Cette adresse email est déjà utilisée");
      return;
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const roleLambda = "utilisateur";

    const newUser: Utilisateur = {
      id: "",
      email,
      //password: encryptedPassword,
      password,
      nom,
      prenom,
      organisme,
      role: roleLambda,
    };

    const dbUser = await UtilisateurModel.create(newUser);
    res.send(generateTokenResponse(dbUser));
  })
);

const generateTokenResponse = (user: any) => {
  const token = jwt.sign(
    {
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "30d",
    }
  );

  user.token = token;
  console.log(user);

  return user;
};

export default router;
