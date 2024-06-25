const express = require("express");
const router = express.Router();
const demandeController = require("../controllers/DemandeController");

router.post("/ajouter", demandeController.ajouter);
//router.post('/voir/:id', demandeController.voir);
router.put("/modifier/:id", demandeController.modifier);
router.delete("/supprimer/:id", demandeController.supprimer);
router.get("/all", demandeController.getAll);

//router.showAll('/', demandeController.showAll);

module.exports = router;
