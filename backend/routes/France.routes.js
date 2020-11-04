const express = require('express');
const router = express.Router();
const FranceController = require('../controllers/France.controller');


router.get('/france', FranceController.getAll);

router.get('/france/:id', FranceController.getById);

module.exports = router;
