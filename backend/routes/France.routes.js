const express = require('express');
const router = express.Router();
const FranceController = require('../controllers/France.controller');


router.get('/concerts', FranceController.getAll);

router.get('/concerts/:id', FranceController.getById);

module.exports = router;
