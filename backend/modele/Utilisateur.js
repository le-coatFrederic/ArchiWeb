const mongoose = require('mongoose');

const Role = {
    ADMIN: 'admin',
    UTILISATEUR: 'utilisateur'
};

const UtilisateurSchema = new mongoose.Schema({
    //id: { type: String, required: false, unique: true },
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: [Role.ADMIN, Role.UTILISATEUR], required: true },
    nom: { type: String, required: true }, // nom de la personne ou nom de l'organisme
    prenom: { type: String, required: false },
});

module.exports = mongoose.model('Utilisateur', UtilisateurSchema);
module.exports.Role = Role;
