import { Router } from "express";
import asyncHandler from "express-async-handler";
import { Materiel, MaterielModel } from "../models/materiel.model";

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const materiels: Materiel[] = [
      {
        _id: "test",
        type: "Bureau",
        modele: "Bureau en bois",
        imageUrl:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Farchzine.fr%2Fwp-content%2Fuploads%2F2015%2F09%2Fbureau-en-bois-massif-grand-bureau-en-bois-clair-avec-toutes-les-commodit%25C3%25A9s.jpg&f=1&nofb=1&ipt=b56d8f0ac01dc6bf5f2e33db3cb5794b4a1043e01840d183349509fecb7edce4&ipo=images",
        emplacement: "",
        idUtilisateur: "",
      },
    ]; //await MaterielModel.find();
    res.send(materiels);
  })
);

router.get(
  "/search/:id",
  asyncHandler(async (req, res) => {
    const materiel: Materiel = {
      _id: "test",
      type: "Bureau",
      modele: "Bureau en bois",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Farchzine.fr%2Fwp-content%2Fuploads%2F2015%2F09%2Fbureau-en-bois-massif-grand-bureau-en-bois-clair-avec-toutes-les-commodit%25C3%25A9s.jpg&f=1&nofb=1&ipt=b56d8f0ac01dc6bf5f2e33db3cb5794b4a1043e01840d183349509fecb7edce4&ipo=images",
      emplacement: "",
      idUtilisateur: "",
    };
    res.send(materiel);
  })
);

export default router;
