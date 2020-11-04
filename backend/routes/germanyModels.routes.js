const express = require('express');
const router = express.Router();
const GermanyModelController = require('../controllers/germanyModels.controller');

router.get('/germanyModels', GermanyModelController.getAll);

router.get('/germanyModels/:id', GermanyModelController.getById);

module.exports = router;
