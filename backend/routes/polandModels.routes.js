const express = require('express');
const router = express.Router();
const PolandModelController = require('../controllers/polandModels.controller');


router.get('/polandModels', PolandModelController.getAll);

router.get('/polandModels/:id', PolandModelController.getById);

module.exports = router;
