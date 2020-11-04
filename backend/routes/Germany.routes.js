const express = require('express');
const router = express.Router();
const GermanyController = require('../controllers/Germany.controller');

router.get('/germany', GermanyController.getAll);

router.get('/germany/:id', GermanyController.getById);

module.exports = router;
