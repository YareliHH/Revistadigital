const mongoose = require('mongoose');

const computacionSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    img: { type: String, required: true },
    url: { type: String, required: true },
    fecha: { type: Date, default: Date.now },
    categoria: { type: String, default: 'computacion' }
});

module.exports = mongoose.model('Computacion', computacionSchema);
