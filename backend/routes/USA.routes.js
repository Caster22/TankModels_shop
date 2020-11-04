const express = require('express');
const router = express.Router();
const USAController = require('../controllers/USA.controller');

router.get('/USA', USAController.getAll);

router.get('/USA/:id', USAController.getById);

module.exports = router;
