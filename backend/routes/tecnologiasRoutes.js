const express = require('express');
const router = express.Router();
const Tecnologia = require('../models/tecnologias');

// Obtener todas las tecnologías
router.get('/', async (req, res) => {
    try {
        const tecnologias = await Tecnologia.find();
        res.json(tecnologias);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Crear una nueva tecnología
router.post('/', async (req, res) => {
    const tecnologia = new Tecnologia({
        titulo: req.body.titulo,
        autor: req.body.autor,
        contenido: req.body.contenido
    });
    
    try {
        const nuevaTecnologia = await tecnologia.save();
        res.status(201).json(nuevaTecnologia);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
