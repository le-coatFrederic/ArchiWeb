const mongoose = require('mongoose');
const { Statut } = require('./Statut');

//Création de la table Matériel
const DemandeSchema = new mongoose.Schema({
    id: { type: String, required: false },
    statut: { type: String, enum: [Statut.VALIDEE, Statut.ATTENTE, Statut.REFUSEE], required: true },

    // clé étrangère :
    utilisateur: { type: mongoose.Schema.Types.String, ref: 'Utilisateur', required: true }, 
    materiel: { type: mongoose.Schema.Types.String, ref: 'Materiel', required: true }, 
    lieu: { type: mongoose.Schema.Types.String, ref: 'Salles', required: true }, 
});

module.exports = mongoose.model('Demande', DemandeSchema);
