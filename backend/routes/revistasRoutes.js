const express = require('express');
const router = express.Router();
const Revista = require('../models/revistas');

// Obtener todas las revistas
router.get('/', async (req, res) => {
    try {
        const revistas = await Revista.find();
        res.json(revistas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Obtener una revista por ID
router.get('/:id', getRevista, (req, res) => {
    res.json(res.revista);
});

// Crear una nueva revista
router.post('/', async (req, res) => {
    const revista = new Revista({
        titulo: req.body.titulo,
        autor: req.body.autor,
        descripcion: req.body.descripcion,
        img: req.body.img,
        url: req.body.url
    });

    try {
        const nuevaRevista = await revista.save();
        res.status(201).json(nuevaRevista);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Actualizar una revista por ID
router.patch('/:id', getRevista, async (req, res) => {
    if (req.body.titulo != null) {
        res.revista.titulo = req.body.titulo;
    }
    if (req.body.autor != null) {
        res.revista.autor = req.body.autor;
    }
    if (req.body.descripcion != null) {
        res.revista.descripcion = req.body.descripcion;
    }
    if (req.body.img != null) {
        res.revista.img = req.body.img;
    }
    if (req.body.url != null) {
        res.revista.url = req.body.url;
    }

    try {
        const revistaActualizada = await res.revista.save();
        res.json(revistaActualizada);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Eliminar una revista por ID
router.delete('/:id', getRevista, async (req, res) => {
    try {
        await res.revista.remove();
        res.json({ message: 'Revista eliminada' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware para obtener una revista por ID
async function getRevista(req, res, next) {
    let revista;
    try {
        revista = await Revista.findById(req.params.id);
        if (revista == null) {
            return res.status(404).json({ message: 'No se encontró la revista' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.revista = revista;
    next();
}

module.exports = router;
