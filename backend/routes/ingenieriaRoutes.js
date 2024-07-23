const express = require('express');
const router = express.Router();
const Ingenieria = require('../models/ingenieria'); 

// Obtener todas las ingenierías
router.get('/', async (req, res) => {
    try {
        const ingenierias = await Ingenieria.find(); // Usa el nombre correcto del modelo
        res.json(ingenierias);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Crear una nueva ingeniería
router.post('/', async (req, res) => {
    const ingenieria = new Ingenieria({
        titulo: req.body.titulo,
        autor: req.body.autor,
        img: req.body.img,
        url: req.body.url
    });

    try {
        const nuevaIngenieria = await ingenieria.save();
        res.status(201).json(nuevaIngenieria);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
