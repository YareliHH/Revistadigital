const mongoose = require('mongoose');

const cienciaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    img: { type: String, required: true },
    url: { type: String, required: true },
    fecha: { type: Date, default: Date.now },
    categoria: { type: String, default: 'ciencia' }
});

module.exports = mongoose.model('Ciencia', cienciaSchema);
