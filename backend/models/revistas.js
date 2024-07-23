const mongoose = require('mongoose');
const { Schema } = mongoose;

const revistaSchema = new Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    descripcion: { type: String, required: true },
    img: { type: String, required: true },
    url: { type: String, required: true },
    fecha: { type: Date, default: Date.now },
    categoria: { type: String, default: 'revistas' }
});

module.exports = mongoose.model('Revista', revistaSchema);
