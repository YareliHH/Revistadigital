const mongoose = require('mongoose');

const noticiaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    contenido: { type: String, required: true },
    fecha: { type: Date, default: Date.now },
    categoria: { type: String, default: 'noticias' }
});

module.exports = mongoose.model('Noticia', noticiaSchema);
