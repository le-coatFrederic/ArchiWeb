const express = require("express");
const router = express.Router();
const userController = require("../controllers/UtilisateurController");

router.post("/ajouter", userController.ajouterUtilisateur);
router.post("/connexion", userController.connexion);
router.put("/modifier/:_id", userController.modifier);
router.delete("/supprimer/:_id", userController.supprimer);

router.get("/tousUtilisateur", userController.getAll);
// router.get('/profil-utilisateur', userController.getProfil);

module.exports = router;
