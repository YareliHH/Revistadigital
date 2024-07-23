const express = require('express');
const router = express.Router();
const Noticia = require('../models/noticia');

// Obtener todas las noticias
router.get('/', async (req, res) => {
    try {
        const noticias = await Noticia.find();
        res.json(noticias);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Crear una nueva noticia
router.post('/', async (req, res) => {
    const noticia = new Noticia({
        titulo: req.body.titulo,
        autor: req.body.autor,
        contenido: req.body.contenido
    });
    
    try {
        const nuevaNoticia = await noticia.save();
        res.status(201).json(nuevaNoticia);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
