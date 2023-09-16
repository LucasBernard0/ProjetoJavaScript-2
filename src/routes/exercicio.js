const express = require('express')
const ControllerExercicio = require('../controllers/exercicio')

const controller = new ControllerExercicio()
const router = express.Router()

router.post('/api/exercicio', controller.Somar)
router.post('/api/exercicio', controller.Salario)
router.post('/api/exercicio', controller.MediaPesos)

module.exports = router