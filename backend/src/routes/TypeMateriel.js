const express = require("express");
const router = express.Router();
const TypeMaterielController = require("../controllers/TypeMaterielController");

router.post("/ajouter", TypeMaterielController.ajouter);
//router.post('/voir', TypeMaterielController.voir);
router.put("/modifier/:id", TypeMaterielController.modifier);
router.delete("/supprimer/:id", TypeMaterielController.supprimer);
router.get("/tous", TypeMaterielController.getAll);

module.exports = router;
