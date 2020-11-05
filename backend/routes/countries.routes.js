const express = require('express');
const router = express.Router();
const CountriesController = require('../controllers/countries.controller');


router.get('/countries', CountriesController.getAll);

router.get('/countries/:id', CountriesController.getById);

module.exports = router;
