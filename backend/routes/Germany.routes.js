const express = require('express');
const router = express.Router();
const GermanyController = require('../controllers/Germany.controller');

router.get('/concerts', GermanyController.getAll);

router.get('/concerts/:id', GermanyController.getById);

module.exports = router;
