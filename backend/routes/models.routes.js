const express = require('express');
const router = express.Router();
const ModelsController = require('../controllers/models.controller');


router.get('/models', ModelsController.getAll);

router.get('/models/:id', ModelsController.getById);

module.exports = router;

