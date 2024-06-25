const express = require("express");
const router = express.Router();
const SalleController = require("../controllers/SalleController");

router.post("/ajouter", SalleController.ajouter);
//router.post('/voir', SalleController.voir);
router.put("/modifier/:id", SalleController.modifier);
router.delete("/supprimer/:id", SalleController.supprimer);

router.get("/all", SalleController.getAll);

module.exports = router;
