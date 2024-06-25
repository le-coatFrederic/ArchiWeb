const mongoose = require('mongoose');
const { Statut } = require('./Statut');

const MaterielSchema = new mongoose.Schema({
    modele: { type: String, required: true },
    statut: { type: String, enum: [Statut.STOCKE, Statut.UTILISE], required: false },

    // clé étrangère :
    localisation: { type: mongoose.Schema.Types.String, ref: 'Salle', required: false }, 
    type: { type: mongoose.Schema.Types.String, ref: 'TypeMateriel', required: true },
    assignedTo: { type: mongoose.Schema.Types.String, ref: 'Utilisateur', default: null },
});

module.exports = mongoose.model('Materiel', MaterielSchema);
