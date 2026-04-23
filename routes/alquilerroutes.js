const express = require('express');
const router = express.Router();
const alquilerController = require('../controller/alquilercontroller');

// Ruta para registrar un nuevo alquiler
router.post('/', alquilerController.realizarAlquiler);

router.get('/', alquilerController.historial);

// Ruta para obtener el historial de alquileres
router.get('/historial', alquilerController.historial);

module.exports = router;
