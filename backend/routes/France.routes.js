const express = require('express');
const router = express.Router();
const FranceController = require('../controllesrs/France.controller');


router.get('/concerts', FranceController.getAll);

router.get('/concerts/:id', FranceController.getById);

module.exports = router;
