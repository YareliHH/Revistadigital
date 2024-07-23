const express = require('express');
const router = express.Router();
const Ciencia = require('../models/ciencia');

// Obtener todas las ciencias
router.get('/', async (req, res) => {
    try {
        const ciencias = await Ciencia.find();
        res.json(ciencias);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Crear una nueva ciencia
router.post('/', async (req, res) => {
    const ciencia = new Ciencia({
        titulo: req.body.titulo,
        autor: req.body.autor,
        img: req.body.img,
        url: req.body.url
    });
    
    try {
        const nuevaCiencia = await ciencia.save();
        res.status(201).json(nuevaCiencia);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
