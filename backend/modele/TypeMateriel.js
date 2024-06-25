const mongoose = require('mongoose');

const TypeMaterielSchema = new mongoose.Schema({
    libelle: { type: String, required: true },
});

module.exports = mongoose.model('TypeMateriel', TypeMaterielSchema);
