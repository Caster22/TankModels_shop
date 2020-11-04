const express = require('express');
const router = express.Router();
const GbModelController = require('../controllers/gbModels..controller');


router.get('/gbModels', GbModelController.getAll);

router.get('/gbModels/:id', GbModelController.getById);

module.exports = router;
