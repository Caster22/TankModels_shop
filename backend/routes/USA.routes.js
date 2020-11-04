const express = require('express');
const router = express.Router();
const USAController = require('../controllers/USA.controller');

router.get('/concerts', USAController.getAll);

router.get('/concerts/:id', USAController.getById);

module.exports = router;
