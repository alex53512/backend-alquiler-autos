const express = require('express');
const router = express.Router();

const autoController = require('../controller/autoscontroller');

// Ruta para obtener autos disponibles
router.get('/', autoController.autosDisponibles);

// Ruta para registrar un nuevo auto
router.post('/', autoController.registrarAuto);

// Ruta para devolver un vehículo alquilado
router.put('/:id/devolver', autoController.devolverAuto);

module.exports = router;
