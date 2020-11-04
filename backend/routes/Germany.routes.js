const express = require('express');
const router = express.Router();
const GermanyController = require('../controllesrs/Germany.controller');

router.get('/concerts', GermanyController.getAll);

router.get('/concerts/:id', GermanyController.getById);

module.exports = router;
