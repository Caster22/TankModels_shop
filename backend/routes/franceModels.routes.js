const express = require('express');
const router = express.Router();
const FranceModelController = require('../controllers/franceModels.controller');


router.get('/franceModels', FranceModelController.getAll);

router.get('/franceModels/:id', FranceModelController.getById);

module.exports = router;
