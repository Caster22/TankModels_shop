const express = require('express');
const router = express.Router();
const UsaModelController = require('../controllers/usaModels.controller');

router.get('/usaModels', UsaModelController.getAll);

router.get('/usaModels/:id', UsaModelController.getById);

module.exports = router;
