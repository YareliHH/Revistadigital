const express = require('express');
const router = express.Router();
const Computacion = require('../models/computacion');

// Obtener todas las computaciones
router.get('/', async (req, res) => {
    try {
        const computaciones = await Computacion.find();
        res.json(computaciones);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Crear una nueva computación
router.post('/', async (req, res) => {
    const computacion = new Computacion({
        titulo: req.body.titulo,
        autor: req.body.autor,
        img: req.body.img,
        url: req.body.url
    });
    
    try {
        const nuevaComputacion = await computacion.save();
        res.status(201).json(nuevaComputacion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
