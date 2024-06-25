const mongoose = require('mongoose');

const SalleSchema = new mongoose.Schema({
    numero: { type: String, required: true },
    etage: { type: String, required: true },
    adresse: { type: String, required: true },
    adresseComplement: { type: String, required: false },
    codePostal: { type: String, required: true },
    ville: { type: String, required: false },
});

module.exports = mongoose.model('Salle', SalleSchema);
